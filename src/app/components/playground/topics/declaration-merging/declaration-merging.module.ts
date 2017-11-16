import './declaration-merging.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import DeclarationMergingComponent from './declaration-merging.component';

const DeclarationMergingModule: IModule = angular
    .module('app.components.playground.topics.declaration-merging', [])
    .component('declarationMerging', DeclarationMergingComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('declaration-merging', {
                component: 'declarationMerging',
                url: '/playground/declaration-merging'
            });
        $urlRouterProvider.otherwise('/');
    });

export default DeclarationMergingModule;