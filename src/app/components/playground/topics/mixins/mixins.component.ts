import {IComponentOptions} from 'angular';
import MixinsController from './mixins.controller';

const template: string = require('./mixins.html');
const MixinsComponent: IComponentOptions = {
    template,
    controller: MixinsController
};

export default MixinsComponent;