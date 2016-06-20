

class InvoiceDetailController{
  constructor($scope, $stateParams, invoiceStore){

    invoiceStore.getInvoice($stateParams.id)
      .then((invoice) =>{
        $scope.invoice = invoice.data;
      })
      .catch((e) =>{
        if(e) throw new Error(e)
      })
    
  }
}

export default [
  '$scope', 
  '$stateParams', 
  'invoiceStore',
  InvoiceDetailController
]