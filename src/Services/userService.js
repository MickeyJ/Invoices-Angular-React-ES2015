
const userService = (API) =>(
  function($http){
    return {
      getAllUsers: () => {
        return $http.get(`${API}/user`)
          .then((data) => {
            return data
          });
      },
      getUser: (id) => {
        return $http.get(`${API}/user/${id}`)
          .then((data) => {
            return data
          });
      },
      getUserInvoices: (id) => {
        return $http.get(`${API}/user_invoice/${id}`)
          .then((data) => {
            return data
          });
      }
    }
  }
);
export default userService