import './declaration-files.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import DeclarationFilesComponent from './declaration-files.component';

const DeclarationFilesModule: IModule = angular
    .module('app.components.playground.topics.declaration-files', [])
    .component('declarationFiles', DeclarationFilesComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('declaration-files', {
                component: 'declarationFiles',
                url: '/playground/declaration-files'
            });
        $urlRouterProvider.otherwise('/');
    });

export default DeclarationFilesModule;