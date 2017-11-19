import {IAttributes, IDirective, IDirectiveFactory, IRootScopeService, IScope, ITimeoutService} from 'angular';

class LoaderDirective implements IDirective {
    public static $inject: string[] = ['$timeout', '$rootScope'];

    public restrict: string = 'A';

    constructor(private $timeout: ITimeoutService, private $rootScope: IRootScopeService) {
    }

    public link(scope: IScope, element: JQLite, attributes: IAttributes): void {
        element.ready(() => {
            this.$timeout(() => {
                this.$rootScope.$broadcast('loader:status', {status: false});
            }, 1000);
        });
    }

    public static factory(): IDirectiveFactory {
        const directive = ($timeout: ITimeoutService, $rootScope: IRootScopeService) => {
            return new LoaderDirective($timeout, $rootScope);
        };
        directive.$inject = this.$inject;

        return directive;
    }
}

export default LoaderDirective;