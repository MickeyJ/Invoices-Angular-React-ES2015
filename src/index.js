import angular from 'angular'
import 'angular-ui-router'

import HomePage from './Pages/Home/'
import InvoiceList from './Pages/InvoiceList/'
import InvoiceDetail from './Pages/InvoiceDetail/'
import UserList from './Pages/UserList/'
import UserDetail from './Pages/UserDetail/'

import invoiceService from './Services/invoiceService'
import userService from './Services/userService'

const REMOTE_API = 'http://invoice-api.herokuapp.com/api';

const app = angular.module('someApp', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) =>{

  $stateProvider
    .state('/', HomePage('/'))
    .state('invoices', InvoiceList('/invoices'))
    .state('invoice/:id', InvoiceDetail('/invoice/:id'))
    .state('users', UserList('/users'))
    .state('user/:id', UserDetail('/user/:id'));

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});

app.service('invoiceStore', invoiceService(REMOTE_API));
app.service('userStore', userService(REMOTE_API));