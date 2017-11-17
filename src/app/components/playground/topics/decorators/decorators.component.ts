import {IComponentOptions} from 'angular';
import DecoratorsController from './decorators.controller';

const template: string = require('./decorators.html');
const DecoratorsComponent: IComponentOptions = {
    template,
    controller: DecoratorsController
};

export default DecoratorsComponent;