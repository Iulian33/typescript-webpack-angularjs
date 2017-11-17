import './highlighter.scss';
import {IComponentOptions} from 'angular';
import HighlighterController from './highlighter.controller';

const template: string = require('./highlighter.html');
const HighlighterComponent: IComponentOptions = {
    template,
    controller: HighlighterController
};

export default HighlighterComponent;