import './loader.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import LoaderComponent from './loader.component';
import LoaderDirective from './loader.directive';

const LoaderModule: IModule = angular
    .module('app.common.loader', [])
    .component('loader', LoaderComponent)
    .directive('loaderDirective', LoaderDirective.factory());

export default LoaderModule;