import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import {IModule} from 'angular';
import uiRouter from '@uirouter/angularjs';

const CoreModule: IModule = angular
    .module('app.core', [
        uiRouter,
        ngAnimate
    ]);

export default CoreModule;