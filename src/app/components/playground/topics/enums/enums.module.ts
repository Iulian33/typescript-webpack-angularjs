import './enums.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import EnumsComponent from './enums.component';

const EnumsModule: IModule = angular
    .module('app.components.playground.topics.enums', [])
    .component('enums', EnumsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('enums', {
                component: 'enums',
                url: '/playground/enums'
            });
        $urlRouterProvider.otherwise('/');
    });

export default EnumsModule;