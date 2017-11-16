import './logger.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import LoggerComponent from './logger.component';

const LoggerModule: IModule = angular
    .module('app.common.logger', [])
    .component('logger', LoggerComponent);

export default LoggerModule;