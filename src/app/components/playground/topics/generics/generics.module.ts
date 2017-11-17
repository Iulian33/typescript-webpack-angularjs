import './generics.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import GenericsComponent from './generics.component';

const GenericsModule: IModule = angular
    .module('app.components.playground.topics.generics', [])
    .component('generics', GenericsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('generics', {
                component: 'generics',
                url: '/playground/generics'
            });
        $urlRouterProvider.otherwise('/');
    });

export default GenericsModule;