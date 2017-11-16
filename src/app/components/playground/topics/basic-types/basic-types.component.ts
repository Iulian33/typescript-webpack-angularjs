import {IComponentOptions} from 'angular';
import BasicTypesController from './basic-types.controller';

const template: string = require('./basic-types.html');
const BasicTypesComponent: IComponentOptions = {
    template,
    controller: BasicTypesController
};

export default BasicTypesComponent;