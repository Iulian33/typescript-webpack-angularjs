import './home.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import HomeComponent from './home.component';

const HomeModule: IModule = angular
    .module('app.components.home', [])
    .component('home', HomeComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('home', {
                component: 'home',
                url: '/'
            });
        $urlRouterProvider.otherwise('/');
    });

export default HomeModule;