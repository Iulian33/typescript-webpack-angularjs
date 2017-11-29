import {IHttpService} from 'angular';

class RatesService {
    public static $inject: string[] = ['$http'];

    constructor(private $http: IHttpService) {
    }

    public async getRates() {
        const rates = await this.$http.get('https://api.fixer.io/latest');

        return rates.data;
    }
}

export default RatesService;