
class UserDetailController{
  constructor($scope, $stateParams, userStore){

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

export default [
  '$scope',
  '$stateParams',
  'userStore',
  UserDetailController
]