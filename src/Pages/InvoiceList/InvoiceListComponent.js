import React, { PropTypes } from 'react'

const InvoiceListComponent = (props) => {
  const {invoices, $filter} = props;
  return (
    <div>
      <table className="u-full-width">
        <tbody>
        <tr>
          <th>ID</th>
          <th>Service</th>
          <th>Date</th>
          <th> </th>
        </tr>
        {invoices.map((invoice, i) => (
          <tr key={i} >
            <td>{invoice.invoice_id}</td>
            <td>{invoice.service}</td>
            <td>{$filter('date')(invoice.date)}</td>
            <td>
              <a href={'/#/invoice/'+ invoice.invoice_id} >Details</a >
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

InvoiceListComponent.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default InvoiceListComponent