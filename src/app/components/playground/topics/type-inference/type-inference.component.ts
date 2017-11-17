import {IComponentOptions} from 'angular';
import TypeInferenceController from './type-inference.controller';

const template: string = require('./type-inference.html');
const TypeInferenceComponent: IComponentOptions = {
    template,
    controller: TypeInferenceController
};

export default TypeInferenceComponent;