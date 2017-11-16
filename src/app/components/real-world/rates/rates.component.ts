import {IComponentOptions} from 'angular';
import RatesController from './rates.controller';

const template: string = require('./rates.html');
const RatesComponent: IComponentOptions = {
    template,
    controller: RatesController
};

export default RatesComponent;