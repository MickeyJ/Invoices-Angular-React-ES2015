import path from 'path'
import UserListController from './controller'

const UserList = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'user_list.html'),
    controller: UserListController
  }
);

export default UserList
