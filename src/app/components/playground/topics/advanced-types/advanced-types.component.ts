import {IComponentOptions} from 'angular';
import AdvancedTypesController from './advanced-types.controller';

const template: string = require('./advanced-types.html');
const AdvancedTypesComponent: IComponentOptions = {
    template,
    controller: AdvancedTypesController
};

export default AdvancedTypesComponent;