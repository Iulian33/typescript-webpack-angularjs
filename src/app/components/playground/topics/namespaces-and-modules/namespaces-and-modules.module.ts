import './namespaces-and-modules.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import NamespacesComponent from './namespaces-and-modules.component';

const NamespacesAndModulesModule: IModule = angular
    .module('app.components.playground.topics.namespaces-and-modules', [])
    .component('namespacesAndModules', NamespacesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('namespaces-and-modules', {
                component: 'namespacesAndModules',
                url: '/playground/namespaces-and-modules'
            });
        $urlRouterProvider.otherwise('/');
    });

export default NamespacesAndModulesModule;