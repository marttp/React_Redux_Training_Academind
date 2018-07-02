
// The main activity of store to create store
// connect reducer between store from create and use in our application
import {createStore,combineReducers,applyMiddleware} from 'redux';


//import reducer for use
import math from './app/reducers/mathReducer';
import user from './app/reducers/userReducer';

//import third-party function
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';


const store = createStore(combineReducers({
    math,user
    }),
    {},
    // applyMiddleware(logger,thunk,promise())
    applyMiddleware(logger,thunk)
);


store.subscribe(()=>{
    console.log("Store Update!",store.getState())
});


// dispatch like a global method for manipulation global state
store.dispatch({
    type:"ADD",
    payload: 15
});

store.dispatch({
    type:"SET_NAME",
    payload: "THANAPHOOM"
});


store.dispatch({
    type:"SUBTRACT",
    payload: 10
});
store.dispatch({
    type:"MULTIPLY",
    payload: 15
});


store.dispatch({
    type:"SET_AGE",
    payload: 30
});


store.dispatch({
    type:"DIVIDE",
    payload: 5
});

export default store;