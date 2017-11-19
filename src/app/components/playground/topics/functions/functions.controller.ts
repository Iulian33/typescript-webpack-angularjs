import {IComponentController} from 'angular';
import ITopic from '../../../../ITopic';

class FunctionsController implements IComponentController {
    public static $inject: string[] = [];

    public navigationOptions: ITopic[];

    constructor() {
        this.navigationOptions = [
            {label: 'Home', state: 'home'},
            {label: 'Back', state: 'playground'},
            {label: 'Real World Examples', state: 'real-world'}
        ];
    }
}

export default FunctionsController;