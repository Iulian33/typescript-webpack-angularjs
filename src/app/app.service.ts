import {IHttpInterceptor, IHttpResponse, IPromise, IQService, IRequestConfig, IRootScopeService} from 'angular';

class AppService implements IHttpInterceptor {
    public static $inject: string[] = ['$q', '$rootScope'];

    private counter: number = 0;

    private eventName: string = 'loader:status';

    constructor(private $q: IQService, private $rootScope: IRootScopeService) {
    }


    public request(config: IRequestConfig): IRequestConfig | IPromise<IRequestConfig> {
        // console.log(this);
        // if (++this.counter === 1) {
        //     this.$rootScope.$broadcast(this.eventName, {status: true});
        // }

        return config;
    }

    public response<T>(response: IHttpResponse<T>): IPromise<IHttpResponse<T>> | IHttpResponse<T> {
        // if (--this.counter === 0) {
        //     this.$rootScope.$broadcast(this.eventName, {status: false});
        // }

        return response;
    }

    public requestError(rejection: any): IRequestConfig | IPromise<IRequestConfig> {
        // this.$rootScope.$broadcast(this.eventName, {status: false});
        //
        // return this.$q.reject(rejection);

        return rejection;
    }

    public responseError<T>(rejection: any): IPromise<IHttpResponse<T>> | IHttpResponse<T> {
        // this.$rootScope.$broadcast(this.eventName, {status: false});
        //
        // return this.$q.reject(rejection);

        return rejection;
    }

    public static factory(): any {
        const service = ($q: IQService, $rootScope: IRootScopeService) => new AppService($q, $rootScope);
        service.$inject = ['$q', '$rootScope'];

        return service;
    }
}

export default AppService;