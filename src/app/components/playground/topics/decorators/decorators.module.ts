import './decorators.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import DecoratorsComponent from './decorators.component';

const DecoratorsModule: IModule = angular
    .module('app.components.playground.topics.decorators', [])
    .component('decorators', DecoratorsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('decorators', {
                component: 'decorators',
                url: '/playground/decorators'
            });
        $urlRouterProvider.otherwise('/');
    });

export default DecoratorsModule;