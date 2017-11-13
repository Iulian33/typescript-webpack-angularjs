import './app.scss';
import * as angular from 'angular';
import {IModule} from "angular";
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import ComponentsModule from './components/components.module';

const AppModule: IModule = angular
    .module('app', [
        uiRouter,
        ComponentsModule.name
    ])
    .component('app', AppComponent);

export default AppModule;