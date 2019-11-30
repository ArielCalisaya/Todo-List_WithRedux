import { createStore } from 'redux';


const initialState = {
    todoText:'',
    list: [
        {
            id:1,
            name: "ariel calisaya",
            photo: "https://www.underconsideration.com/brandnew/archives/me_bank_logo_detail.png"
        },
        {
            id:2,
            name: "Robert steven",
            photo: "http://assets2.ignimgs.com/2015/03/11/the-simpsons-homer-simpson-wallpaperjpg-57aa94_1280w.jpgs"
        },
        {
            id:3,
            name: "tomas gihn",
            photo: "http://margaretperry.org/wp-content/uploads/2014/10/Cantinflas.jpg"
        }
    ],
    todoState:[]
}

const ReduccerList = (state = initialState, action) => {
    return state
}

export default createStore(ReduccerList)
