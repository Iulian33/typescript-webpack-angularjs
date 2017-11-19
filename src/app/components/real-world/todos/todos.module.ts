import './todos.scss';
import * as angular from 'angular';
import {IModule} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import TodoComponent from './todos.component';
import TodoService from './todos.service';

const TodoModule: IModule = angular
    .module('app.components.real-world.todos', [])
    .component('todos', TodoComponent)
    .service('TodosService', TodoService)
    .config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('todos', {
                component: 'todos',
                url: '/real-world/todos'
            });
        $urlRouterProvider.otherwise('/');
    });

export default TodoModule;