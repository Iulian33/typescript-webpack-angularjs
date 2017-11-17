import {IComponentOptions} from 'angular';
import NamespacesController from './namespaces.controller';

const template: string = require('./namespaces.html');
const NamespacesComponent: IComponentOptions = {
    template,
    controller: NamespacesController
};

export default NamespacesComponent;