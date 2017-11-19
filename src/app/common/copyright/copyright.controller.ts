import {IComponentController} from 'angular';

class CopyrightController implements IComponentController {
    public static $inject: string[] = [];
    public name: string = 'Steve Hook';
    public year: number = new Date().getFullYear();
}

export default CopyrightController;