import path from 'path'
import InvoiceListController from './controller'

const InvoiceList = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'invoice_list.html'),
    controller: InvoiceListController
  }
);

export default InvoiceList