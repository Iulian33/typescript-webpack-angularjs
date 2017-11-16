import {IComponentOptions} from 'angular';
import PlaygroundController from './real-world.controller';

const template: string = require('./real-world.html');
const PlaygroundComponent: IComponentOptions = {
    template,
    controller: PlaygroundController
};

export default PlaygroundComponent;