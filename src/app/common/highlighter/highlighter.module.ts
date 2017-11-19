import './highlighter.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import HighlighterComponent from './highlighter.component';
import HighlighterDirective from './highlighter.directive';

const HighlighterModule: IModule = angular
    .module('app.common.highlighter', [])
    .component('highlighter', HighlighterComponent)
    .directive('highlighterDirective', HighlighterDirective.factory());

export default HighlighterModule;