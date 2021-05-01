import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useWeb3Context } from 'web3-react'
import { SET_FILE_CHECK } from '../../../actions/types.js'
import { default as contract } from '@truffle/contract'
import notary_artifact from '../../../build/Notary.json'
var Notary = contract(notary_artifact)

const CheckFile = () => {
  const dispatch = useDispatch()
  const context = useWeb3Context()
  const [account, setAccount] = useState('')
  const cfileInput = React.createRef()
  useEffect(() => {
    context.setFirstValidConnector(['MetaMask', 'Infura'])
    setAccount(context.account)
    if (context.account) {
      Notary.setProvider(context.library.currentProvider)
      Notary.defaults({ from: account })
    }
  }, [dispatch, context.account, account])

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

  const processRead = (e) => {
    e.preventDefault()
    const file = cfileInput.current.files[0]
    createHash(file)
      .then((hash) => {
        if (hash.substring(0, 2) !== '0x') hash = '0x' + hash
        const fileHash = hash
        return Notary.deployed()
          .then((instance) => {
            return instance.entrySet(fileHash)
          })
          .then((res) => {
            dispatch({
              type: SET_FILE_CHECK,
              payload: {
                error: '',
                comment: res[2],
                filename: res[0],
                uploadedBy: res[3],
                date: new Date(res[1].toNumber() * 1000).toString(),
              },
            })
          })
          .catch((err) => {
            dispatch({
              type: SET_FILE_CHECK,
              payload: {
                comment: '',
                filename: '',
                uploadedBy: '',
                date: '',
                error: 'File does not exist',
              },
            })
          })
      })
      .catch((err) => {
        dispatch({
          type: SET_FILE_CHECK,
          payload: {
            comment: '',
            filename: '',
            uploadedBy: '',
            date: '',
            error: 'File does not exist',
          },
        })
      })
  }

  return (
    <div className="container">
      <div className="card mt-3">
        <h3 className="text-center mt-3 text-uppercase">Check a File</h3>
        <div className="container p-4">
          <form action="" onSubmit={processRead} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">File:</label>
              <input className="form-control" type="file" ref={cfileInput} />
            </div>
            <button
              className="w-100 btn btn-success btn-lg mt-3 mb-3"
              type="submit"
            >
              Check Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, null)(CheckFile)
