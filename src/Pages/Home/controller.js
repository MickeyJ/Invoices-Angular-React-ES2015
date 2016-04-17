import path from 'path'

const HomePage = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'home.html'),
    controller: ($scope) =>{
      $scope.title = 'Home Page'
    }
  }
);

export default HomePage