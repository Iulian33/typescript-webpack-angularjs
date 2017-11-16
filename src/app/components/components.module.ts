import './components.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import HomeModule from './home/home.module';
import PlaygroundModule from './playground/playground.module';
import RealWorldModule from './real-world/real-world.module';

const ComponentsModule: IModule = angular
    .module('app.components', [
        HomeModule.name,
        PlaygroundModule.name,
        RealWorldModule.name
    ]);

export default ComponentsModule;