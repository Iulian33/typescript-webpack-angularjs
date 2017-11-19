import './copyright.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import CopyrightComponent from './copyright.component';

const CopyrightModule: IModule = angular
    .module('app.common.copyright', [])
    .component('copyright', CopyrightComponent);

export default CopyrightModule;