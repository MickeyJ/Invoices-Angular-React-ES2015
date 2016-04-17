import angular from 'angular'
import 'angular-ui-router'

import HomePage from './Pages/Home/controller'
import InvoiceList from './Pages/InvoiceList/controller'
import InvoiceDetail from './Pages/InvoiceDetail/controller'
import UserList from './Pages/UserList/controller'
import UserDetail from './Pages/UserDetail/controller'

import invoiceService from './Services/invoiceService'
import userService from './Services/userService'

const API = 'http://invoice-api.herokuapp.com/api';

const app = angular.module('someApp', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) =>{
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/', HomePage('/'))
    .state('invoices', InvoiceList('/invoices'))
    .state('invoice', InvoiceDetail('/invoice/:id'))
    .state('users', UserList('/users'))
    .state('user', UserDetail('/user/:id'))
});

app.service('invoiceStore', invoiceService(API));
app.service('userStore', userService(API));