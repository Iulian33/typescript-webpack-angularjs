import {IComponentOptions} from 'angular';
import DeclarationFilesController from '../declaration-files/declaration-files.controller';

const template: string = require('./declaration-merging.html');
const DeclarationMergingComponent: IComponentOptions = {
    template,
    controller: DeclarationFilesController
};

export default DeclarationMergingComponent;