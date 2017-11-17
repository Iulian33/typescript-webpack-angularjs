import './namespaces.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import NamespacesComponent from './namespaces.component';

const NamespacesModule: IModule = angular
    .module('app.components.playground.topics.namespaces', [])
    .component('namespaces', NamespacesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('namespaces', {
                component: 'namespaces',
                url: '/playground/namespaces'
            });
        $urlRouterProvider.otherwise('/');
    });

export default NamespacesModule;