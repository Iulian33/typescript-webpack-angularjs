import './app.scss';
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';

export const AppModule = angular
    .module('app', [
        uiRouter,
        ComponentsModule
    ])
    .component('app', AppComponent)
    .name;