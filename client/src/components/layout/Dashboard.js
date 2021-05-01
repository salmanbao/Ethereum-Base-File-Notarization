import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { useWeb3Context } from 'web3-react'
import { default as contract } from '@truffle/contract'
import notary_artifact from '../../build/contracts/Notary.json'
var Notary = contract(notary_artifact)

const Dashboard = ({ auth, logoutUser }) => {
  const context = useWeb3Context()
  const [account, setAccount] = useState('')
  const [status, setStatus] = useState('')
  const sfileInput = React.createRef()
  const cfileInput = React.createRef()
  const [comment, setComment] = useState('')
  useEffect(() => {
    console.log(account)
    context.setFirstValidConnector(['MetaMask', 'Infura'])
    setAccount(context.account)
    if (context.account) {
      Notary.setProvider(context.library.currentProvider)
      Notary.defaults({ from: account })
    }
  }, [context.account, account])

  const toHex = (buffer) => {
    var i, n, k, value, stringValue, padding, paddedValue
    var hexCodes = []
    var view = new DataView(buffer)
    for (
      i = 0, n = view.byteLength, k = Uint32Array.BYTES_PER_ELEMENT;
      i < n;
      i += k
    ) {
      // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
      value = view.getUint32(i)
      // toString(16) will give the hex representation of the number without padding
      stringValue = value.toString(16)
      // We use concatenation and slice for padding
      padding = '00000000'
      paddedValue = (padding + stringValue).slice(-padding.length)
      hexCodes.push(paddedValue)
    }
    // Join all the hex strings into one
    return hexCodes.join('')
  }

  const createHash = (file) => {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader()
      reader.onload = function () {
        var buffer = this.result
        crypto.subtle
          .digest('SHA-256', buffer)
          .then(function (hash) {
            resolve(toHex(hash))
          })
          .catch(reject)
      }
      reader.onerror = reject
      reader.readAsArrayBuffer(file)
    })
  }

  const processSend = (e) => {
    e.preventDefault()
    const file = sfileInput.current.files[0]
    console.log(sfileInput.current.files[0])
    createHash(file)
      .then((hash) => {
        setStatus('OK')
        if (hash.substring(0, 2) !== '0x') hash = '0x' + hash
        const fileHash = hash
        const fileName = file.name

        console.log(fileHash)

        return Notary.deployed()
          .then((instance) => {
            return instance.addEntry(fileHash, fileName, comment, {
              gas: 3000000,
            })
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            setStatus(err)
            console.log(err)
          })
      })
      .catch((err) => {
        setStatus(err)
        console.log(err)
      })
  }

  const processRead = (e) => {
    e.preventDefault()
    const file = cfileInput.current.files[0]
    createHash(file)
      .then((hash) => {
        setStatus('OK')
        if (hash.substring(0, 2) !== '0x') hash = '0x' + hash
        const fileHash = hash
        return Notary.deployed()
          .then((instance) => {
            return instance.entrySet(fileHash)
          })
          .then((res) => {
            console.log(`Filename: ${res[0]}`)
            console.log(`Filename: ${new Date(res[1].toNumber() * 1000)}`)
            console.log(`Comment: ${res[2]}`)
            console.log(`Uploaded by: ${res[3]}`)
          })
          .catch((err) => {
            setStatus(err)
            console.log(err)
          })
      })
      .catch((err) => {
        setStatus(err)
        console.log(err)
      })
  }

  const onLogout = (e) => {
    context.unsetConnector()
    logoutUser()
  }

  const { user } = auth
  return (
    <div className="container text-center mt-15">
      <div className="row">
        <div className="col-sm-12">
          <h4>
            Hey there, <b className="name-lable">{user.name.split(' ')[0]}</b>
          </h4>
          <div className="row">
            <div className="col-lg">
              <h2>Upload a new File</h2>
              <form
                action=""
                onSubmit={processSend}
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="fileWrite">File:</label>
                  <input
                    className="form-control"
                    type="file"
                    ref={sfileInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Comment:</label>
                  <input
                    className="form-control"
                    type={'text'}
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                    }}
                  />
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                  Submit new Entry
                </button>
              </form>
            </div>
            <div className="col-lg">
              <h2>Check a File</h2>
              <form
                action=""
                onSubmit={processRead}
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="fileRead">File:</label>
                  <input
                    className="form-control"
                    type="file"
                    ref={cfileInput}
                  />
                </div>

                <button className="btn btn-success btn-block" type="submit">
                  Check now!
                </button>
              </form>
              <div id="resultRead"></div>
            </div>
          </div>
          {account && !context.error && (
            <h4>
              Your Address, <b className="name-lable">{account}</b>
            </h4>
          )}

          {(!context.active || context.error) && (
            <h4>
              <b>Please connect your wallet</b>
            </h4>
          )}
          <button
            onClick={onLogout}
            className="btn btn-large btn-light hoverable font-weight-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)
