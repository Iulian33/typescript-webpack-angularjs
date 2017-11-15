import {IComponentOptions} from 'angular';
import FooterController from './footer.controller';

const template: string = require('./footer.html');
const FooterComponent: IComponentOptions = {
    template,
    controller: FooterController
};

export default FooterComponent;