import React from 'react'

export default (props) => {
  const bodyRef = React.createRef()
  const createPdf = () => props.createPdf(bodyRef.current)
  return (
    <section className="pdf-container">
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
      <section className="pdf-toolbar" style={{ textAlign: 'center' }}>
        <button
          className={'btn btn-primary'}
          style={{ margin: '40px 0px' }}
          onClick={createPdf}
        >
          Download Certificate
        </button>
      </section>
    </section>
  )
}
