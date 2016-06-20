import React from 'react'
import ReactDOM from 'react-dom'
import InvoiceListComponent from './InvoiceListComponent'

class InvoiceListController{
  constructor($scope, $filter, invoiceStore){
    
    invoiceStore.getAllInvoices()
      .then((invoices) =>{
        $scope.message = 'Invoices';
        $scope.invoiceAmount = invoices.data.length;
        
        ReactDOM.render(
          <InvoiceListComponent invoices={invoices.data} $filter={$filter}/>,
          document.getElementById('invoice-list')
        )
        
      })
      .catch((e) =>{
        if(e) throw new Error(e)
      })
  }
}


export default [
  '$scope',
  '$filter',
  'invoiceStore',
  InvoiceListController
]