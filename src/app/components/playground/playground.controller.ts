import {IComponentController} from 'angular';
import PlaygroundService from './playground.service';
import ITopic from '../../ITopic';

class PlaygroundController implements IComponentController {
    public static $inject: string[] = ['PlaygroundService'];
    public topics: ITopic[];
    public navigationOptions: ITopic[] = [
        {
            label: 'Home',
            state: 'home'
        },
        {
            label: 'Real World Examples',
            state: 'real-world'
        }
    ];

    constructor(private playgroundService: PlaygroundService) {
        this.topics = playgroundService.getTopics();
    }

    public search(searchData: ITopic[]) {
        this.topics = searchData.length ? searchData : this.playgroundService.getTopics();
    }
}

export default PlaygroundController;