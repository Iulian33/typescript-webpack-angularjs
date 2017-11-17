import './type-inference.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import TypeInferenceComponent from './type-inference.component';

const TypeInferenceModule: IModule = angular
    .module('app.components.playground.topics.type-inference', [])
    .component('typeInference', TypeInferenceComponent)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('type-inference', {
                component: 'typeInference',
                url: '/playground/type-inference'
            });
        $urlRouterProvider.otherwise('/');
    });

export default TypeInferenceModule;