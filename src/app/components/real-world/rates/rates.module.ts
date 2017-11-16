import './rates.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import uiRouter from '@uirouter/angularjs';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import RatesComponent from './rates.component';
import RatesService from './rates.service';

const RatesModule: IModule = angular
    .module('app.components.real-world.rates', [
        uiRouter
    ])
    .component('rates', RatesComponent)
    .service('RatesService', RatesService)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('rates', {
                component: 'rates',
                url: '/real-world/rates'
            });
        $urlRouterProvider.otherwise('/');
    });

export default RatesModule;