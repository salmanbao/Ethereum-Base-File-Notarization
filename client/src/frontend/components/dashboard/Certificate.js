import React from 'react'
import '../../css/certificate.css'

const Certificate = ({ signee, filename, date }) => {
  return (
    <div className="container pm-certificate-container">
      <div className="outer-border"></div>
      <div className="inner-border"></div>

      <div className="pm-certificate-border col-xs-12">
        <div className="row pm-certificate-header">
          <div className="pm-certificate-title cursive col-xs-12 text-center">
            <h2>Notarization Certificate</h2>
          </div>
        </div>

        <div className="row pm-certificate-body">
          <div className="pm-certificate-block">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                  <span className="pm-name-text bold">{signee}</span>
                </div>
                <div className="col-xs-2"></div>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="pm-earned col-xs-8 text-center">
                  <span className="pm-earned-text padding-0 block cursive">
                    Signee of this file
                  </span>
                </div>
                <div className="col-xs-2"></div>
                <div className="col-xs-12"></div>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="pm-course-title col-xs-8 text-center">
                  <span className="pm-earned-text block cursive"></span>
                </div>
                <div className="col-xs-2"></div>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="pm-course-title col-xs-8 text-center">
                  <span className="pm-credits-text block bold sans description">
                    This is to certify that the dataset or file referred
                    hereunder wad notarized at date and times printed down below
                    by person identified as "signee"
                  </span>
                </div>
                <div className="col-xs-2"></div>
              </div>
            </div>
          </div>

          <div className="col-xs-12">
            <div className="row">
              <div className="pm-certificate-footer">
                <div className="col-xs-6 pm-certified text-center">
                  <span className="bold block">Name</span>
                  <span className="pm-credits-text block sans">{filename}</span>
                </div>
                <div className="col-xs-6 pm-certified text-center">
                  <span className="bold block ">Date & Time</span>
                  <span className="pm-credits-text block sans">{date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Certificate
