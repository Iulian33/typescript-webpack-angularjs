import {IComponentOptions} from 'angular';
import LoaderController from './loader.controller';

const template: string = require('./loader.html');
const LoaderComponent: IComponentOptions = {
    template,
    controller: LoaderController
};

export default LoaderComponent;