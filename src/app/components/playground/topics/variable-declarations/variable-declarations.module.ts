import './variable-declarations.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import VariableDeclarationsComponent from './variable-declarations.component';

const VariableDeclarationsModule: IModule = angular
    .module('app.components.playground.topics.variable-declarations', [])
    .component('variableDeclarations', VariableDeclarationsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('variable-declarations', {
                component: 'variableDeclarations',
                url: '/playground/variable-declarations'
            });
        $urlRouterProvider.otherwise('/');
    });

export default VariableDeclarationsModule;