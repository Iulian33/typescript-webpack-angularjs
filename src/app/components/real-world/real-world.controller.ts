import {IComponentController} from 'angular';
import RealWorldService from './real-world.service';
import ITopic from '../../ITopic';

class RealWorldController implements IComponentController {
    public static $inject: string[] = ['RealWorldService'];
    public topics: ITopic[];
    public navigationOptions: ITopic[] = [
        {
            label: 'Home',
            state: 'home'
        },
        {
            label: 'Playground Examples',
            state: 'playground'
        }
    ];

    constructor(private realWorldService: RealWorldService) {
        this.topics = realWorldService.getTopics();
    }

    public search(searchData: ITopic[]) {
        this.topics = searchData.length ? searchData : this.realWorldService.getTopics();
    }
}

export default RealWorldController;