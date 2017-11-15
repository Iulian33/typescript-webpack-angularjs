import './footer.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import FooterComponent from './footer.component';

const FooterModule: IModule = angular
    .module('app.common.footer', [])
    .component('footer', FooterComponent);

export default FooterModule;