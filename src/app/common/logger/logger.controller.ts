import {IComponentController, ITranscludeFunction} from 'angular';
import showdown = require('showdown');
import {Converter} from 'showdown';
import $ = require('jquery');

class LoggerController implements IComponentController {
    public static $inject: string[] = ['$transclude'];

    private converter: Converter;

    constructor(private $transclude: ITranscludeFunction) {
        $transclude((clone, scope) => {
            console.log(clone.text());
            console.log(scope);
            // $scope.text = clone.text().toUpperCase();
        });
        // this.converter = new showdown.Converter();
        // $(document).ready(() => {
        //     const text = $('.logger__text').text();
        //     $('.logger__text').html(this.converter.makeHtml('\`Hello\`'));
        // });
    }
}

export default LoggerController;