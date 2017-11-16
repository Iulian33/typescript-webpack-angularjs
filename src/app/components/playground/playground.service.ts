import ITopic from '../ITopic';
import IWorkshop from '../IWorkshop';

class PlaygroundService implements IWorkshop {
    public topics: ITopic[] = [
        {label: 'Basic Types', state: 'Hello'},
        {label: 'Variable Declarations', state: 'Hello'},
        {label: 'Interfaces', state: 'Hello'},
        {label: 'Classes', state: 'Hello'},
        {label: 'Functions', state: 'Hello'},
        {label: 'Generics', state: 'Hello'},
        {label: 'Enums', state: 'Hello'},
        {label: 'Type Inference', state: 'Hello'},
        {label: 'Type Compatibility', state: 'Hello'},
        {label: 'Advanced Types', state: 'Hello'},
        {label: 'Symbols', state: 'Hello'},
        {label: 'Iterators and Generators', state: 'Hello'},
        {label: 'Modules', state: 'Hello'},
        {label: 'Namespaces', state: 'Hello'},
        {label: 'Namespaces and Modules', state: 'Hello'},
        {label: 'Module Resolution', state: 'Hello'},
        {label: 'Declaration Merging', state: 'Hello'},
        {label: 'Decorators', state: 'Hello'},
        {label: 'Mixins', state: 'Hello'},
        {label: 'Triple Slash Directives', state: 'Hello'},
        {label: 'Declaration Files', state: 'Hello'}
    ];

    public getTopics(): ITopic[] {
        return this.topics;
    }
}

export default PlaygroundService;