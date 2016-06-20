import path from 'path'

import HomeController from './controller'

const HomePage = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'home.html'),
    controller: HomeController
  }
);

export default HomePage