import {IComponentController} from 'angular';
import hljs = require('highlight.js');
import $ = require('jquery');

class HighlighterController implements IComponentController {
    // Todo: Add spinner
    // Todo: Add directive
    constructor() {
        $(document).ready(() => {
            $('pre code').each((i: number, block: HTMLElement) => {
                hljs.highlightBlock(block);
            });
        });
    }
}

export default HighlighterController;