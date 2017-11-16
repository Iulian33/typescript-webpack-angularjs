import './highlighter.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import HighlighterComponent from './highlighter.component';

const HighlighterModule: IModule = angular
    .module('app.common.highlighter', [])
    .component('highlighter', HighlighterComponent);

export default HighlighterModule;