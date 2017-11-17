import './app.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';
import AppService from './app.service';

const AppModule: IModule = angular
    .module('app', [
        uiRouter,
        CommonModule.name,
        ComponentsModule.name
    ])
    .component('app', AppComponent)
    .service('AppService', AppService);

export default AppModule;