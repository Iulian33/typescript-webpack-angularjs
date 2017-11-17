import './triple-slash-directives.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import TripleSlashDirectivesComponent from './triple-slash-directives.component';

const TripleSlashDirectivesModule: IModule = angular
    .module('app.components.playground.topics.triple-slash-directives', [])
    .component('tripleSlashDirectives', TripleSlashDirectivesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('triple-slash-directives', {
                component: 'tripleSlashDirectives',
                url: '/playground/triple-slash-directives'
            });
        $urlRouterProvider.otherwise('/');
    });

export default TripleSlashDirectivesModule;