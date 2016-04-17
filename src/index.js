import angular from 'angular'
import 'angular-ui-router'

import HomePageConfig from './Pages/Home/controller'
import InvoiceListConfig from './Pages/InvoiceList/controller'
import InvoiceDetailConfig from './Pages/InvoiceDetail/controller'
import UserListConfig from './Pages/UserList/controller'
import UserDetailConfig from './Pages/UserDetail/controller'

import invoiceService from './Services/invoiceService'
import userService from './Services/userService'

const LOCAL_API = 'http://localhost:3000/api';

const app = angular.module('someApp', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) =>{
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/', HomePageConfig('/'))
      .state('invoices', InvoiceListConfig('/invoices'))
      .state('invoice', InvoiceDetailConfig('/invoice/:id'))
      .state('users', UserListConfig('/users'))
      .state('user', UserDetailConfig('/user/:id'))
});

app.service('invoiceStore', invoiceService(LOCAL_API));
app.service('userStore', userService(LOCAL_API));