import path from 'path'
import InvoiceDetailController from './controller'

const InvoiceDetail = (url) => (
{
  url: url,
  templateUrl: path.join(__dirname, 'invoice_detail.html'),
  controller: InvoiceDetailController
}
);

export default InvoiceDetail