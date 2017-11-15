import './nav.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import NavComponent from './nav.component';

const NavModule: IModule = angular
    .module('app.common.nav', [])
    .component('footer', NavComponent);

export default NavModule;