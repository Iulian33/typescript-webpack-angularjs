import {IComponentController} from 'angular';
import RealWorldService from './real-world.service';
import ITopic from '../ITopic';

class RealWorldController implements IComponentController {
    public static $inject: string[] = ['RealWorldService'];
    public topics: ITopic[];

    constructor(private realWorldService: RealWorldService) {
        this.topics = realWorldService.getTopics();
    }
}

export default RealWorldController;