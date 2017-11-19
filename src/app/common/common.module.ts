import * as angular from 'angular';
import {IModule} from 'angular';
import CopyrightModule from './copyright/copyright.module';
import NavigationModule from './navigation/navigation.module';
import HighlighterModule from './highlighter/highlighter.module';
import LoggerModule from './logger/logger.module';
import LoaderModule from './loader/loader.module';

const CommonModule: IModule = angular
    .module('app.common', [
        CopyrightModule.name,
        NavigationModule.name,
        HighlighterModule.name,
        LoggerModule.name,
        LoaderModule.name
    ]);

export default CommonModule;