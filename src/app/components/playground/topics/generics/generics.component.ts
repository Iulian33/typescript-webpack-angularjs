import {IComponentOptions} from 'angular';
import GenericsController from './generics.controller';

const template: string = require('./generics.html');
const GenericsComponent: IComponentOptions = {
    template,
    controller: GenericsController
};

export default GenericsComponent;