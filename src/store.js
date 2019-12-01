import { createStore } from 'redux';


const initialState = {
    todo:[
        {
            id:1,
            name: "Ariel Calisaya",
            photo: "https://www.underconsideration.com/brandnew/archives/me_bank_logo_detail.png",
            description: 'Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla ssssssssssssssss Some Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id:2,
            name: "Robert Steven",
            photo: "http://assets2.ignimgs.com/2015/03/11/the-simpsons-homer-simpson-wallpaperjpg-57aa94_1280w.jpgs",
            description: 'lorem ipsum onekant aomdem aodmoe maodm kodem meneenee aaorie claama akosdm'
        },
        {
            id:3,
            name: "Thomas Gihn",
            photo: "http://margaretperry.org/wp-content/uploads/2014/10/Cantinflas.jpg",
            description:' ayer fui a mcdonalds por ende me urgio '
        }
    ],
}

const ReduccerList = (state = initialState, action) => {
    return state
}

export default createStore(ReduccerList)
