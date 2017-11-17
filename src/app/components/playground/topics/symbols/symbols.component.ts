import {IComponentOptions} from 'angular';
import SymbolsController from './symbols.controller';

const template: string = require('./symbols.html');
const SymbolsComponent: IComponentOptions = {
    template,
    controller: SymbolsController
};

export default SymbolsComponent;