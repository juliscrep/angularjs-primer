import angular from 'angular';
import '@uirouter/angularjs';
import '@angular/core';
import '@ionic/angular';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);