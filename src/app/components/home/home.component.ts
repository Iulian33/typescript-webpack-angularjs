import {IComponentOptions} from "angular";
import HomeController from "./home.controller";
import jQuery = require('jquery');
import {hello} from './blah';

const template: string = require('./home.html');
const HomeComponent: IComponentOptions = {
    template,
    controller: HomeController
};

const helloFunction = () => {};


// $(document).ready(function() {
    // $('pre code').each(function(i, block) {
    //     hljs.highlightBlock(block);
    // });
// });

export default HomeComponent;