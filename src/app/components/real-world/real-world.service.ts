import ITopic from '../ITopic';
import IWorkshop from '../IWorkshop';

class RealWorldService implements IWorkshop {
    public static $inject: string[] = [];

    public topics: ITopic[] = [
        {label: 'Todo CRUD', state: 'todos'},
        {label: 'Fixer API', state: 'rates'}
    ];

    public getTopics() {
        return this.topics;
    }
}

export default RealWorldService;