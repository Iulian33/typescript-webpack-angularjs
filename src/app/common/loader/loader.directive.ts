import {IAttributes, IAugmentedJQuery, IDirective, IRootScopeService, IScope, ITimeoutService} from 'angular';

class LoaderDirective {
    public static $inject: string[] = ['$timeout'];
    public restrict: string;
    public link: (scope: IScope, element: IAugmentedJQuery, attrs: IAttributes) => void;

    constructor(private $timeout: ITimeoutService, private $rootScope: IRootScopeService) {
        this.restrict = 'A';

        LoaderDirective.prototype.link = (scope: IScope, element: IAugmentedJQuery, attrs: IAttributes) => {
            element.ready(() => {
                this.$timeout(() => {
                    this.$rootScope.$broadcast('test', {on: true});
                }, 1000);
            });
        };
    }

    public static factory() {
        const directive = ($timeout: ITimeoutService, $rootScope: IRootScopeService) => {
            return new LoaderDirective($timeout, $rootScope);
        };

        directive.$inject = ['$timeout', '$rootScope'];

        return directive;
    }
}

export default LoaderDirective;