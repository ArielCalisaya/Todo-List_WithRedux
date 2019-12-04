let todoAdd = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: todoAdd++,
  text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});
