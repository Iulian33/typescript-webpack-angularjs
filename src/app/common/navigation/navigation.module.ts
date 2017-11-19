import './navigation.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import NavigationComponent from './navigation.component';

const NavigationModule: IModule = angular
    .module('app.common.navigation', [])
    .component('navigation', NavigationComponent);

export default NavigationModule;