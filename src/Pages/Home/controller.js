import path from 'path'
const htmlTemplate = path.join(__dirname, 'home.html');

const HomePageConfig = (url) => (
  {
    url: url,
    templateUrl: htmlTemplate,
    controller: ($scope) =>{

      $scope.title = 'Home Page'
    }
  }
);

export default HomePageConfig