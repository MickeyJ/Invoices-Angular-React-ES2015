import path from 'path'

const HomePageConfig = (url) => (
  {
    url: url,
    templateUrl: path.join(__dirname, 'home.html'),
    controller: ($scope) =>{

      $scope.title = 'Home Page'
    }
  }
);

export default HomePageConfig