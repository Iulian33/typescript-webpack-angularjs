import './type-compatibility.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import TypeCompatibilityComponent from './type-compatibility.component';

const TypeCompatibilityModule: IModule = angular
    .module('app.components.playground.topics.type-compatibility', [])
    .component('typeCompatibility', TypeCompatibilityComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('type-compatibility', {
                component: 'typeCompatibility',
                url: '/playground/type-compatibility'
            });
        $urlRouterProvider.otherwise('/');
    });

export default TypeCompatibilityModule;