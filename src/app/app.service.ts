import {IQService, IRootScopeService} from 'angular';

class AppService {
    public static $inject: string[] = ['$q', '$rootScope'];

    private $q: IQService;

    private $rootScope: IRootScopeService;

    private counter: number = 0;

    private eventName: string = 'loader:status';

    public request(config: object) {
        if (++this.counter === 1) {
            this.$rootScope.$broadcast(this.eventName, {on: true});
        }

        return config;
    }

    public response(response: object) {
        if (--this.counter === 0) {
            this.$rootScope.$broadcast(this.eventName, {on: false});
        }

        return response;
    }

    public requestError(rejection: object) {
        this.$rootScope.$broadcast(this.eventName, {on: false});

        return this.$q.reject(rejection);
    }

    public responseError(response: object) {
        this.$rootScope.$broadcast(this.eventName, {on: false});

        return this.$q.reject(response);
    }
}

export default AppService;