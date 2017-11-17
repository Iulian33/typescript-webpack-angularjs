import './symbols.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import SymbolsComponent from './symbols.component';

const SymbolsModule: IModule = angular
    .module('app.components.playground.topics.symbols', [])
    .component('symbols', SymbolsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('symbols', {
                component: 'symbols',
                url: '/playground/symbols'
            });
        $urlRouterProvider.otherwise('/');
    });

export default SymbolsModule;