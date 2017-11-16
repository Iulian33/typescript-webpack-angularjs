import {IComponentOptions} from 'angular';
import ClassesController from './classes.controller';

const template: string = require('./classes.html');
const ClassesComponent: IComponentOptions = {
    template,
    controller: ClassesController
};

export default ClassesComponent;