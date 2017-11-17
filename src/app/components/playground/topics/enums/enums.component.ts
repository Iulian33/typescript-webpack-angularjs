import {IComponentOptions} from 'angular';
import EnumsController from './enums.controller';

const template: string = require('./enums.html');
const EnumsComponent: IComponentOptions = {
    template,
    controller: EnumsController
};

export default EnumsComponent;