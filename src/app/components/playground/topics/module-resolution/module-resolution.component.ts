import {IComponentOptions} from 'angular';
import ModuleResolutionController from './module-resolution.controller';

const template: string = require('./module-resolution.html');
const ModuleResolutionComponent: IComponentOptions = {
    template,
    controller: ModuleResolutionController
};

export default ModuleResolutionComponent;