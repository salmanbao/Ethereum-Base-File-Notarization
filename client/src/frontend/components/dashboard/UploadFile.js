import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/authActions'
import { useWeb3Context } from 'web3-react'
import { default as contract } from '@truffle/contract'
import notary_artifact from '../../../build/Notary.json'
var Notary = contract(notary_artifact)

const UploadFile = () => {
  const context = useWeb3Context()
  const [account, setAccount] = useState('')
  const [status, setStatus] = useState('')
  const sfileInput = React.createRef()
  const [comment, setComment] = useState('')
  useEffect(() => {
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
    createHash(file)
      .then((hash) => {
        setStatus('Hash Created .....')
        if (hash.substring(0, 2) !== '0x') hash = '0x' + hash
        const fileHash = hash
        const fileName = file.name

        return Notary.deployed()
          .then((instance) => {
            return instance.addEntry(fileHash, fileName, comment, {
              gas: 3000000,
            })
          })
          .then((res) => {
            setStatus(`Transaction Hash :${res['tx']}`)
          })
          .catch((err) => {
            setStatus('Uploading failed, please try again')
          })
      })
      .catch((err) => {
        setStatus('Uploading failed, please try again')
      })
  }

  return (
    <div className="container">
      <div className="card">
        <h3 className="text-center mt-3 text-uppercase">Upload a New File</h3>
        <div className="container p-4">
          <form action="" onSubmit={processSend} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">File:</label>
              <input className="form-control" type="file" ref={sfileInput} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Comment:</label>
              <input
                className="form-control"
                type={'text'}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value)
                }}
              />
            </div>
            <button
              className="w-100 btn btn-dark btn-lg mt-3 mb-3"
              type="submit"
            >
              Submit a new entry
            </button>
          </form>
          {status !== '' && <div>{status}</div>}
        </div>
      </div>
    </div>
  )
}

export default UploadFile
