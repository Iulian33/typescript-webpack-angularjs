import './loader.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import LoaderComponent from './loader.component';

const LoaderModule: IModule = angular
    .module('app.common.loader', [])
    .component('loader', LoaderComponent);

export default LoaderModule;