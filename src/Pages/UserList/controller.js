import React from 'react'
import ReactDOM from 'react-dom'
import path from 'path'
import UserListComponent from './UserListComponent'

const htmlTemplate = path.join(__dirname, 'user_list.html');

const UserListConfig = (url) => (
  {
    url: url,
    templateUrl: htmlTemplate,
    controller: ($scope, $filter, userStore) =>{

      userStore.getAllUsers()
        .then((users) =>{

          $scope.message = 'Users';
          $scope.userAmount = users.data.length;

          ReactDOM.render(
            <UserListComponent users={users.data} $filter={$filter}/>,
            document.getElementById('user-list')
          )

        }).catch((e) =>{
        if(e) throw new Error(e)
      })
    }
  }
);

export default UserListConfig