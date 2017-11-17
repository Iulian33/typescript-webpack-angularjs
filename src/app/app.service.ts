import {IHttpInterceptor, IHttpResponse, IPromise, IQService, IRequestConfig, IRootScopeService} from 'angular';

class AppService implements IHttpInterceptor {
    public static $inject: string[] = ['$q', '$rootScope'];

    private counter: number = 0;

    private eventName: string = 'loader:status';

    constructor(private $q: IQService, private $rootScope: IRootScopeService) {
    }


    public request(config: IRequestConfig): IRequestConfig | IPromise<IRequestConfig> {
        if (++this.counter === 1) {
            this.$rootScope.$broadcast(this.eventName, {on: true});
        }

        return config;
    }

    public response<T>(response: IHttpResponse<T>): IPromise<IHttpResponse<T>> | IHttpResponse<T> {
        if (--this.counter === 0) {
            this.$rootScope.$broadcast(this.eventName, {on: false});
        }

        return response;
    }

    public requestError(rejection: any): IRequestConfig | IPromise<IRequestConfig> {
        this.$rootScope.$broadcast(this.eventName, {on: false});

        return this.$q.reject(rejection);
    }

    public responseError<T>(rejection: any): IPromise<IHttpResponse<T>> | IHttpResponse<T> {
        this.$rootScope.$broadcast(this.eventName, {on: false});

        return this.$q.reject(rejection);
    }
}

export default AppService;