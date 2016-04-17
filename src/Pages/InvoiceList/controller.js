import React from 'react'
import ReactDOM from 'react-dom'
import path from 'path'
import InvoiceListComponent from './InvoiceListComponent'

const htmlTemplate = path.join(__dirname, 'invoice_list.html');

const InvoiceListConfig = (url) => (
  {
    url: url,
    templateUrl: htmlTemplate,
    controller: ($scope, $filter, invoiceStore) =>{

      invoiceStore.getAllInvoices()
        .then((invoices) =>{

          $scope.message = 'Invoices';
          $scope.invoiceAmount = invoices.data.length;

          ReactDOM.render(
            <InvoiceListComponent invoices={invoices.data} $filter={$filter}/>,
            document.getElementById('invoice-list')
          )

        }).catch((e) =>{
        if(e) throw new Error(e)
      })
    }
  }
);

export default InvoiceListConfig