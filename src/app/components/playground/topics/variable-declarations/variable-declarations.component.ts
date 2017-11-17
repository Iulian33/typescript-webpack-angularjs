import {IComponentOptions} from 'angular';
import VariableDeclarationsController from './variable-declarations.controller';

const template: string = require('./variable-declarations.html');
const VariableDeclarationsComponent: IComponentOptions = {
    template,
    controller: VariableDeclarationsController
};

export default VariableDeclarationsComponent;