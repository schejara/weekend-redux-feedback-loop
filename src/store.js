import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from "redux-logger";


const feelingStore = (state = [], action) => {
    if (action.type === 'FEEDBACK1'){
    return [...state, action.payload]
    }
    return state;
    }

const understandingStore = (state = [], action) =>{
    if (action.type === 'FEEDBACK2'){
    return [...state, action.payload]
    }
    return state;
    }


const supportStore = (state = [], action) =>{
    if (action.type === 'FEEDBACK3'){
        return [...state, action.payload]
    }
    return state;
    }


const commentsStore = (state = [], action) =>{
    if (action.type === 'FEEDBACK4'){
        return [...state, action.payload]
    }
    return state;
    }


const store = createStore(
combineReducers({
    feelingStore,
    understandingStore,
    supportStore,
    commentsStore 
}),

applyMiddleware(logger),
);

export default store;