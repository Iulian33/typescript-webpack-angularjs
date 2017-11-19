import './app.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import AppComponent from './app.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';
import AppConfig from './app.config';
import AppService from './app.service';
import CoreModule from './core/core.module';

const AppModule: IModule = angular
    .module('app', [
        CoreModule.name,
        CommonModule.name,
        ComponentsModule.name
    ])
    .config(AppConfig.boot)
    .component('app', AppComponent)
    .service('AppService', AppService);

export default AppModule;