import './classes.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import ClassesComponent from './classes.component';

const ClassesModule: IModule = angular
    .module('app.components.playground.topics.classes', [])
    .component('classes', ClassesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('classes', {
                component: 'classes',
                url: '/playground/classes'
            });
        $urlRouterProvider.otherwise('/');
    });

export default ClassesModule;