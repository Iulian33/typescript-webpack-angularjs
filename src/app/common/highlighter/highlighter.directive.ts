import {IAttributes, IDirective, IDirectiveFactory, IScope} from 'angular';
import hljs = require('highlight.js');
import $ = require('jquery');

class HighlighterDirective implements IDirective {
    public static $inject: string[] = [];

    public restrict: string = 'A';

    public link(scope: IScope, element: JQLite, attributes: IAttributes): void {
        element.ready(() => {
            $('pre code').each((i: number, block: HTMLElement) => {
                hljs.highlightBlock(block);
            });
        });
    }

    public static factory(): IDirectiveFactory {
        const directive = () => new HighlighterDirective();
        directive.$inject = this.$inject;

        return directive;
    }
}

export default HighlighterDirective;