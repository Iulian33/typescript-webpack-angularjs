import {IComponentOptions} from 'angular';
import NavController from './nav.controller';

const template: string = require('./nav.html');
const NavComponent: IComponentOptions = {
    template,
    controller: NavController
};

export default NavComponent;