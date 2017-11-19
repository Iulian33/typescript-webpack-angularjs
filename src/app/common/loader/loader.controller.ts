import {IController, IScope} from 'angular';

class LoaderController implements IController {
    public static $inject: string[] = ['$scope'];

    public visible: boolean = true;

    constructor(private $scope: IScope) {
        $scope.$on('loader:status', (event, data: ILoaderStatus) => {
            this.visible = data.status;
        });
    }
}

export default LoaderController;