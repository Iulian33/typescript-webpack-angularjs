import {IComponentOptions} from 'angular';
import TodosController from './todos.controller';

const template: string = require('./todos.html');
const TodosComponent: IComponentOptions = {
    template,
    controller: TodosController
};

export default TodosComponent;