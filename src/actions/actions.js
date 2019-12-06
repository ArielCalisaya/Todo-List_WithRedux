import types from './actionTypes';

let nexTodo = 0
export const addTodo = (id, title, text) => ({
  type: types.ADD_TODO,
  id: nexTodo++,
  title,
  text
});

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    id
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id
})
