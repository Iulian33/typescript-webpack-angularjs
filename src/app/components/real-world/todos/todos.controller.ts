import {IComponentController} from 'angular';
import TodosService from './todos.service';

class TodosController implements IComponentController {
    public static $inject: string[] = ['TodosService'];

    constructor(private todosService: TodosService) {
    }
}

export default TodosController;