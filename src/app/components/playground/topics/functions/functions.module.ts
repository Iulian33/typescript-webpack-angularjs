import './functions.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import FunctionsComponent from './functions.component';

const FunctionsModule: IModule = angular
    .module('app.components.playground.topics.functions', [])
    .component('functions', FunctionsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('functions', {
                component: 'functions',
                url: '/playground/functions'
            });
        $urlRouterProvider.otherwise('/');
    });

export default FunctionsModule;