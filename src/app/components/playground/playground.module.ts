import './playground.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import PlaygroundComponent from './playground.component';
import PlaygroundService from './playground.service';
import TopicsModule from './topics/topics.module';

const PlaygroundModule: IModule = angular
    .module('app.components.playground', [TopicsModule.name])
    .component('playground', PlaygroundComponent)
    .service('PlaygroundService', PlaygroundService)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('playground', {
                component: 'playground',
                url: '/playground'
            });
        $urlRouterProvider.otherwise('/');
    });

export default PlaygroundModule;