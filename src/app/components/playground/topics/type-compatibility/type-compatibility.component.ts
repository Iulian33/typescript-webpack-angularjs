import {IComponentOptions} from 'angular';
import TypeCompatibilityController from './type-compatibility.controller';

const template: string = require('./type-compatibility.html');
const TypeCompatibilityComponent: IComponentOptions = {
    template,
    controller: TypeCompatibilityController
};

export default TypeCompatibilityComponent;