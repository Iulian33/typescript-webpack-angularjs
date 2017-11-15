import {IComponentController} from 'angular';
import PlaygroundService from './playground.service';
import ITopic from './contracts/ITopic';

class PlaygroundController implements IComponentController {
    public static $inject: string[] = ['PlaygroundService'];
    public topics: ITopic[];

    constructor(private playgroundService: PlaygroundService) {
        this.topics = playgroundService.getTopics();
    }
}

export default PlaygroundController;