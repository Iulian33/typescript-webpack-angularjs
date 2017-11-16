import './basic-types.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import BasicTypesComponent from './basic-types.component';

const BasicTypesModule: IModule = angular
    .module('app.components.playground.topics.basic-types', [])
    .component('basicTypes', BasicTypesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('basic-types', {
                component: 'basicTypes',
                url: '/playground/basic-types'
            });
        $urlRouterProvider.otherwise('/');
    });

export default BasicTypesModule;