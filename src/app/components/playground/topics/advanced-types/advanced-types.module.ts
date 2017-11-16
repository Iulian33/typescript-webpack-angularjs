import './advanced-types.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import AdvancedTypesComponent from './advanced-types.component';

const AdvancedTypesModule: IModule = angular
    .module('app.components.playground.topics.advanced-types', [])
    .component('advancedTypes', AdvancedTypesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('advanced-types', {
                component: 'advancedTypes',
                url: '/playground/advanced-types'
            });
        $urlRouterProvider.otherwise('/');
    });

export default AdvancedTypesModule;