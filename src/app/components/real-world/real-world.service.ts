import ITopic from '../ITopic';
import IWorkshop from '../IWorkshop';

class RealWorldService implements IWorkshop {
    public topics: ITopic[] = [
        {label: 'Todo CRUD', state: 'Hello'},
        {label: 'Fixer API', state: 'Hello'}
    ];

    public getTopics() {
        return this.topics;
    }
}

export default RealWorldService;