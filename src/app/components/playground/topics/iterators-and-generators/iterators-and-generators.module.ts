import './iterators-and-generators.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import IteratorsAndGeneratorsComponent from './iterators-and-generators.component';

const InterfacesModule: IModule = angular
    .module('app.components.playground.topics.iterators-and-generators', [])
    .component('iteratorsAndGenerators', IteratorsAndGeneratorsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('iterators-and-generators', {
                component: 'iteratorsAndGenerators',
                url: '/playground/iterators-and-generators'
            });
        $urlRouterProvider.otherwise('/');
    });

export default InterfacesModule;