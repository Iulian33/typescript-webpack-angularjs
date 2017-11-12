import './home.scss';
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {HomeComponent} from './home.component';
import {IStateProvider, IUrlRouterProvider} from "angular-ui-router";

export const HomeModule = angular
    .module('app.components.home', [
        uiRouter
    ])
    .component('home', HomeComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('home', {
                component: 'home',
                url: '/'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;