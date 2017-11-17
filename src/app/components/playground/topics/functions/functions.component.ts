import {IComponentOptions} from 'angular';
import FunctionsController from './functions.controller';

const template: string = require('./functions.html');
const FunctionsComponent: IComponentOptions = {
    template,
    controller: FunctionsController
};

export default FunctionsComponent;