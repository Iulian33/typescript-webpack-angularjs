import {IComponentOptions} from 'angular';
import NamespacesAndModulesController from './namespaces-and-modules.controller';

const template: string = require('./namespaces-and-modules.html');
const NamespacesAndModulesComponent: IComponentOptions = {
    template,
    controller: NamespacesAndModulesController
};

export default NamespacesAndModulesComponent;