import React from 'react'
import ReactDOM from 'react-dom'
import UserListComponent from './UserListComponent'

class UserListController{
  constructor($scope, $filter, userStore){
    
    const { getAllUsers } = userStore;
    
    getAllUsers()
      .then((users) =>{
        $scope.message = 'Users';
        $scope.userAmount = users.data.length;

        ReactDOM.render(
          <UserListComponent users={users.data} $filter={$filter}/>,
          document.getElementById('user-list')
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
  'userStore',
  UserListController
]
