import './modules.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import ModulesComponent from './modules.component';

const ModulesModule: IModule = angular
    .module('app.components.playground.topics.modules', [])
    .component('modules', ModulesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('modules', {
                component: 'modules',
                url: '/playground/modules'
            });
        $urlRouterProvider.otherwise('/');
    });

export default ModulesModule;