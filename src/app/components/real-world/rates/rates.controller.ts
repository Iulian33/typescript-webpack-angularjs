import {IComponentController} from 'angular';

class RatesController implements IComponentController {
    public static $inject: string[] = ['RatesService'];

    public base: string;

    public date: string;

    public ratesData: Array<({ name: string, value: number })> = [];

    public rates: any;

    public $onInit() {
        this.base = this.rates.base;
        this.date = this.rates.date;

        for (const rate in this.rates.rates) {
            if (this.rates.rates.hasOwnProperty(rate)) {
                this.ratesData.push({
                    name: rate,
                    value: this.rates.rates[rate]
                });
            }
        }

    }

    public $onChanges(changes: any) {
        this.rates = changes.rates.currentValue;
    }
}

export default RatesController;