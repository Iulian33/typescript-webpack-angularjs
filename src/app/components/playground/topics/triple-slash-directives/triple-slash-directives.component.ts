import {IComponentOptions} from 'angular';
import TripleSlashDirectivesController from './triple-slash-directives.controller';

const template: string = require('./triple-slash-directives.html');
const TripleSlashDirectivesComponent: IComponentOptions = {
    template,
    controller: TripleSlashDirectivesController
};

export default TripleSlashDirectivesComponent;