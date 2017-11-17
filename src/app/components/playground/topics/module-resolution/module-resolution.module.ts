import './module-resolution.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import ModuleResolutionComponent from './module-resolution.component';

const ModuleResolutionModule: IModule = angular
    .module('app.components.playground.topics.module-resolution', [])
    .component('moduleResolution', ModuleResolutionComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('module-resolution', {
                component: 'moduleResolution',
                url: '/playground/module-resolution'
            });
        $urlRouterProvider.otherwise('/');
    });

export default ModuleResolutionModule;