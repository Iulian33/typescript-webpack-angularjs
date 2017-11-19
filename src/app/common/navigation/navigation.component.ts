import {IComponentOptions} from 'angular';
import NavigationController from './navigation.controller';

const template: string = require('./navigation.html');
const NavigationComponent: IComponentOptions = {
    template,
    controller: NavigationController
};

export default NavigationComponent;