import * as angular from 'angular';
import {IModule} from "angular";
import HomeModule from './home/home.module';
import PlaygroundModule from './playground/playground.module';

const ComponentsModule: IModule = angular
    .module('app.components', [
        HomeModule.name,
        PlaygroundModule.name
    ]);

export default ComponentsModule;