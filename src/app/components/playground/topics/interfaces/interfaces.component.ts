import {IComponentOptions} from 'angular';
import InterfacesController from './interfaces.controller';

const template: string = require('./interfaces.html');
const InterfacesComponent: IComponentOptions = {
    template,
    controller: InterfacesController
};

export default InterfacesComponent;