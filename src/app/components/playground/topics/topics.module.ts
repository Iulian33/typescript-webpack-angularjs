import './topics.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import AdvancedTypesModule from './advanced-types/advanced-types.module';
import BasicTypesModule from './basic-types/basic-types.module';
import ClassesModule from './classes/classes.module';
import DeclarationFilesModule from './declaration-files/declaration-files.module';
import DeclarationMerginModule from './declaration-merging/declaration-merging.module';
import DecoratorsModule from './decorators/decorators.module';
import EnumsModule from './enums/enums.module';
import FunctionsModule from './functions/functions.module';
import GenericsModule from './generics/generics.module';
import InterfacesModule from './interfaces/interfaces.module';
import IteratorsAndGeneratorsModule from './iterators-and-generators/iterators-and-generators.module';
import MixinsModule from './mixins/mixins.module';
import ModuleResolutionModule from './module-resolution/module-resolution.module';
import ModulesModule from './modules/modules.module';
import NamespacesModule from './namespaces/namespaces.module';
import NamespacesAndModulesModule from './namespaces-and-modules/namespaces-and-modules.module';
import SymbolsModule from './symbols/symbols.module';
import TripleSlashDirectivesModule from './triple-slash-directives/triple-slash-directives.module';
import TypeCompatibilityModule from './type-compatibility/type-compatibility.module';
import TypeInferenceModule from './type-inference/type-inference.module';
import VariableDeclarationsModule from './variable-declarations/variable-declarations.module';

const TopicsModule: IModule = angular
    .module('app.components.playground.topics', [
        AdvancedTypesModule.name,
        BasicTypesModule.name,
        ClassesModule.name,
        DeclarationFilesModule.name,
        DeclarationMerginModule.name,
        DecoratorsModule.name,
        EnumsModule.name,
        FunctionsModule.name,
        GenericsModule.name,
        InterfacesModule.name,
        IteratorsAndGeneratorsModule.name,
        MixinsModule.name,
        ModuleResolutionModule.name,
        ModulesModule.name,
        NamespacesModule.name,
        NamespacesAndModulesModule.name,
        SymbolsModule.name,
        TripleSlashDirectivesModule.name,
        TypeCompatibilityModule.name,
        TypeInferenceModule.name,
        VariableDeclarationsModule.name
    ]);

export default TopicsModule;