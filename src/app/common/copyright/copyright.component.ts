import {IComponentOptions} from 'angular';
import CopyrightController from './copyright.controller';

const template: string = require('./copyright.html');
const CopyrightComponent: IComponentOptions = {
    template,
    controller: CopyrightController
};

export default CopyrightComponent;