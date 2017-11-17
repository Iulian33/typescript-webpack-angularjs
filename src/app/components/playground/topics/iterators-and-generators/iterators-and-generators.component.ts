import {IComponentOptions} from 'angular';
import IteratorsAndGeneratorsController from './iterators-and-generators.controller';

const template: string = require('./iterators-and-generators.html');
const IteratorsAndGeneratorsComponent: IComponentOptions = {
    template,
    controller: IteratorsAndGeneratorsController
};

export default IteratorsAndGeneratorsComponent;