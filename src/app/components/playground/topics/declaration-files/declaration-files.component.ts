import {IComponentOptions} from 'angular';
import DeclarationFilesController from './declaration-files.controller';

const template: string = require('./declaration-files.html');
const DeclarationFilesComponent: IComponentOptions = {
    template,
    controller: DeclarationFilesController
};

export default DeclarationFilesComponent;