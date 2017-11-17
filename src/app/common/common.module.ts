import * as angular from 'angular';
import {IModule} from 'angular';
import NavModule from './nav/nav.module';
import FooterModule from './footer/footer.module';
import HighlighterModule from './highlighter/highlighter.module';
import LoggerModule from './logger/logger.module';
import LoaderModule from './loader/loader.module';

const CommonModule: IModule = angular
    .module('app.common', [
        NavModule.name,
        FooterModule.name,
        HighlighterModule.name,
        LoggerModule.name,
        LoaderModule.name
    ]);

export default CommonModule;