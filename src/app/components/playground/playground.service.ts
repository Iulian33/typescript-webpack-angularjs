import ITopic from '../../ITopic';
import IWorkshop from '../IWorkshop';

class PlaygroundService implements IWorkshop {
    public topics: ITopic[] = [
        {label: 'Basic Types', state: 'basic-types'},
        {label: 'Variable Declarations', state: 'variable-declarations'},
        {label: 'Interfaces', state: 'interfaces'},
        {label: 'Classes', state: 'classes'},
        {label: 'Functions', state: 'functions'},
        {label: 'Generics', state: 'generics'},
        {label: 'Enums', state: 'enums'},
        {label: 'Type Inference', state: 'type-inference'},
        {label: 'Type Compatibility', state: 'type-compatibility'},
        {label: 'Advanced Types', state: 'advanced-types'},
        {label: 'Symbols', state: 'symbols'},
        {label: 'Iterators and Generators', state: 'iterators-and-generators'},
        {label: 'Modules', state: 'modules'},
        {label: 'Namespaces', state: 'namespaces'},
        {label: 'Namespaces and Modules', state: 'namespaces-and-modules'},
        {label: 'Module Resolution', state: 'module-resolution'},
        {label: 'Declaration Merging', state: 'declaration-merging'},
        {label: 'Decorators', state: 'decorators'},
        {label: 'Mixins', state: 'mixins'},
        {label: 'Triple Slash Directives', state: 'triple-slash-directives'},
        {label: 'Declaration Files', state: 'declaration-files'}
    ];

    public getTopics(): ITopic[] {
        return this.topics;
    }
}

export default PlaygroundService;