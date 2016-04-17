import path from 'path'
const htmlTemplate = path.join(__dirname, 'user_detail.html');

const UserDetailConfig = (url) => (
  {
    url: url,
    templateUrl: htmlTemplate,
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
          console.log(invoices);
          $scope.invoices = invoices.data;
        })
        .catch((e) =>{
          if(e) throw new Error(e)
        })
    }
  }
);

export default UserDetailConfig