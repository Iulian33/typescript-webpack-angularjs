import './interfaces.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import InterfacesComponent from './interfaces.component';

const InterfacesModule: IModule = angular
    .module('app.components.playground.topics.interfaces', [])
    .component('interfaces', InterfacesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('interfaces', {
                component: 'interfaces',
                url: '/playground/interfaces'
            });
        $urlRouterProvider.otherwise('/');
    });

export default InterfacesModule;