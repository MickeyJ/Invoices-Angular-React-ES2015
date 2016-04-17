import path from 'path'

const UserDetail = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'user_detail.html'),
    controller: ($scope, $stateParams, userStore) =>{

      userStore.getUser($stateParams.id)
        .then((user) =>{
          $scope.user = user.data;
        })
        .catch((e) =>{
          if(e) throw new Error(e)
        });

      userStore.getUserInvoices($stateParams.id)
        .then((invoices) =>{
          $scope.invoices = invoices.data;
        })
        .catch((e) =>{
          if(e) throw new Error(e)
        })
    }
  }
);

export default UserDetail