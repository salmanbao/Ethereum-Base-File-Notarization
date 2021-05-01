import React from 'react'
import { connect } from 'react-redux'
import Certificate from './Certificate'
import Doc from '../../../util/DocService'
import PdfContainer from './PdfContainer'

const OutputContainer = ({ file }) => {
  const createPdf = (html) => Doc.createPdf(html)

  return (
    <div className="container mb-4">
      <div className="card mt-3">
        <h3 className="text-center mt-3 text-uppercase">Output</h3>
        <div className="container p-4 text-center">
          <div className="row">
            <div className="col">
              <h5>Filename:</h5>
              <p>{file.filename}</p>
            </div>
            <div className="col">
              <h5>Uploaded date:</h5>
              {file['date'] !== '' && <p>{file['date']}</p>}
              {file['date'] === '' && <p>{file['date']}</p>}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h5>Comment:</h5>
              <p>{file.comment}</p>
            </div>
            <div className="col">
              <h5>Uploaded by:</h5>
              <p>{file.uploadedBy}</p>
            </div>
          </div>
        </div>
        <p className="text-center">{file.error}</p>

        <PdfContainer createPdf={createPdf}>
          <React.Fragment>
            <Certificate
              signee={file.uploadedBy}
              filename={file.filename}
              date={file.date}
            />
          </React.Fragment>
        </PdfContainer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, null)(OutputContainer)
