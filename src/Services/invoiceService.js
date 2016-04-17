
const invoiceService = (API) =>(
  function($http) {
    return {
      getAllInvoices: () => {
        return $http.get(`${API}/invoice`)
          .then((data) => {
            return data
          });
      },
      getInvoice: (id) => {
        return $http.get(`${API}/invoice/${id}`)
          .then((data) => {
            return data
          });
      }
    }
  }
);

export default invoiceService