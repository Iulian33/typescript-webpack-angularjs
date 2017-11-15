import * as angular from 'angular';
import {IModule} from 'angular';
import NavModule from './nav/nav.module';
import FooterModule from './footer/footer.module';

const CommonModule: IModule = angular
    .module('app.common', [
        NavModule.name,
        FooterModule.name
    ]);

export default CommonModule;