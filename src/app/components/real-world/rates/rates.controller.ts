import {IComponentController} from 'angular';
import RatesService from './rates.service';

class RatesController implements IComponentController {
    public static $inject: string[] = ['RatesService'];

    constructor(private ratesService: RatesService) {
    }
}

export default RatesController;