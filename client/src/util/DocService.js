import { savePDF } from '@progress/kendo-react-pdf'

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      scale: 1,
      margin: '1cm',
      landscape: true,
      paperSize: 'Tabloid',
      fileName: 'certificate.pdf',
    })
  }
}

const Doc = new DocService()
export default Doc
