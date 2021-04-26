import { addToList, removeTask } from '../constants';

export const addTodo = (data) => {
    return {
        type: addToList,
        data: data
    }
}

export const removeTodo = (id) => {
    return {
        type: removeTask,
        data: id
    }
}