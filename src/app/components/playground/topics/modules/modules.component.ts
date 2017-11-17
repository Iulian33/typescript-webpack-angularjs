import {IComponentOptions} from 'angular';
import ModulesController from './modules.controller';

const template: string = require('./modules.html');
const ModulesComponent: IComponentOptions = {
    template,
    controller: ModulesController
};

export default ModulesComponent;