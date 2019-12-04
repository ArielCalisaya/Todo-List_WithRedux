import * as actions from './index';

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action' => {
        expect(actions.addTodo('Output String')).toEqual({
            type:'ADD_TODO',
            id: 0,
            text: 'Output String'
        })
    })
    it('toggleTodo should create TOGGLE_TODO action' => {
        expect(actions.toggleTodo(1)).toEqual({
            type:'TOGGLE_TODO',
            id: 1
        })
    })
});
