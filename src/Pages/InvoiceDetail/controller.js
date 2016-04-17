import path from 'path'
const htmlTemplate = path.join(__dirname, 'invoice_detail.html');

const InvoiceDetailConfig = (url) => (
  {
    url: url,
    templateUrl: htmlTemplate,
    controller: ($scope, $stateParams, invoiceStore) =>{

      invoiceStore.getInvoice($stateParams.id)
        .then((invoice) =>{
          $scope.invoice = invoice.data;
        })
        .catch((e) =>{
          if(e) throw new Error(e)
        })
    }
  }
);

export default InvoiceDetailConfig