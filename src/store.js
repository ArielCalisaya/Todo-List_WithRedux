import { createStore } from 'redux';


const initialState = {
    todo:[
        {
            id:1,
            name: "Ariel Calisaya",
            photo: "https://www.underconsideration.com/brandnew/archives/me_bank_logo_detail.png",
            todo: "Let's finish this todooo",
            description: 'Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id:2,
            name: "Robert Steven",
            photo: "http://assets2.ignimgs.com/2015/03/11/the-simpsons-homer-simpson-wallpaperjpg-57aa94_1280w.jpgs",
            todo: "i believe i cant fly",
            description: 'lorem ipsum onekant aomdem aodmoe maodm kodem meneenee aaorie claama akosdm'
        },
        {
            id:3,
            name: "Thomas Gihn",
            photo: "http://margaretperry.org/wp-content/uploads/2014/10/Cantinflas.jpg",
            todo: "Redux is very interesting",
            description:' ayer fui a mcdonalds por ende me urgio '
        }
    ],
}

const ReduccerList = (state = initialState, action) => {

    if (action.type === "AGREGAR_TODO") {
        return(
            {}
        )
    }

    if(action.type ==="ELIMINAR_TODO") {
        return {
            todo: state.todo.filter(l => l.id !== action.todo.id)
        }
    }

    return state
}

export default createStore(ReduccerList)
