import {IHttpProvider} from 'angular';
import AppService from './app.service';

class AppConfig {
    public static $inject: string[] = ['$httpProvider'];

    public static boot($httpProvider: IHttpProvider) {
        $httpProvider.interceptors.push(AppService.name);
    }
}

export default AppConfig;