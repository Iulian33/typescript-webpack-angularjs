import './mixins.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import MixinsComponent from './mixins.component';

const MixinxModule: IModule = angular
    .module('app.components.playground.topics.mixins', [])
    .component('mixins', MixinsComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('mixins', {
                component: 'mixins',
                url: '/playground/mixins'
            });
        $urlRouterProvider.otherwise('/');
    });

export default MixinxModule;