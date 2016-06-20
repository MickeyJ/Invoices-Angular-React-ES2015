import path from 'path'
import UserDetailController from './controller'

const UserDetail = (url) => (
{
  url: url,
  templateUrl: path.join(__dirname, 'user_detail.html'),
  controller: UserDetailController
}
);

export default UserDetail