import {IComponentOptions} from 'angular';
import HomeController from './home.controller';

const template: string = require('./home.html');
const HomeComponent: IComponentOptions = {
    template,
    controller: HomeController
};

export default HomeComponent;