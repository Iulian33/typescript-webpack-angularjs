import './real-world.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import RealWorldComponent from './real-world.component';
import RealWorldService from './real-world.service';
import TodoModule from './todos/todos.module';
import RatesModule from './rates/rates.module';

const RealWorldModule: IModule = angular
    .module('app.components.real-world', [
        TodoModule.name,
        RatesModule.name
    ])
    .component('realWorld', RealWorldComponent)
    .service('RealWorldService', RealWorldService)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('real-world', {
                component: 'realWorld',
                url: '/real-world'
            });
        $urlRouterProvider.otherwise('/');
    });

export default RealWorldModule;