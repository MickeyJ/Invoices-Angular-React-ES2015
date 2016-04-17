import path from 'path'

const InvoiceDetailConfig = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'invoice_detail.html'),
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