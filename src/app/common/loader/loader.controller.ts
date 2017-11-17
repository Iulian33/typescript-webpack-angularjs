import {IController, IScope} from 'angular';

class LoaderController implements IController {
    public static $inject: string[] = ['$scope'];

    public visible: boolean = true;

    constructor(private $scope: IScope) {
        $scope.$on('test', () => {
            this.visible = false;
        });
    }
}

export default LoaderController;