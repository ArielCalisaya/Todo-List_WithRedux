import types from './actions/actionTypes';
import { createStore} from 'redux';

const initialState = {
    todo:[
        {
            id:1,
            name: "Ariel Calisaya",
            photo: "https://www.underconsideration.com/brandnew/archives/me_bank_logo_detail.png",
            title: "Let's finish this todooo",
            text: 'Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla  sit amet, consectetur adipisicing elit.'
        },
        {
            id:2,
            name: "Robert Steven",
            photo: "http://assets2.ignimgs.com/2015/03/11/the-simpsons-homer-simpson-wallpaperjpg-57aa94_1280w.jpgs",
            title: "i believe i cant fly",
            text: 'lorem ipsum onekant aomdem aodmoe maodm kodem meneenee aaorie claama akosdm'
        },
    ],
}

const ReduccerList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return[
            ...state,
            {
                id: state.todo.length,
                title: action.todo.title,
                text: action.todo.text
            }
        ]

        case DELETE_TODO:
        return {
            todo: state.todo.filter(del => del.id !== action.todo.id)
        }

        default:
        return state.todo
    }
}
export default createStore(ReduccerList)
