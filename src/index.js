import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from './app/container/App';


//Move to store.js

// import {createStore,combineReducers,applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import {Provider} from 'react-redux';

import store from './store'
// const mathReducer = (state = {result:50,lastValue:[]},action) => {
//     switch(action.type){
//         case "ADD":
//         state = {
//             ...state,
//             result:state.result + action.payload,
//             lastValue:[...state.lastValue,action.payload]
//         };
//         break;
//         case "SUBTRACT":
//         state = {
//             ...state,
//             result:state.result - action.payload,
//             lastValue:[...state.lastValue,action.payload]

//         };     
//         break;
//         case "MULTIPLY":
//         state = {
//             ...state,
//             result:state.result * action.payload,
//             lastValue:[...state.lastValue,action.payload]

//         };        
//         break;
//         case "DIVIDE":
//         state = {
//             ...state,
//             result:state.result / action.payload,
//             lastValue:[...state.lastValue,action.payload]

//         };        
//         break;
//     }
//     return state;
// };


// const userReducer = (state = { name:'Mart', age:21 },action) => {
//     switch(action.type){
//         case "SET_NAME":
//         state = {
//             ...state,
//             name: action.payload
//         };
//         break;
//         case "SET_AGE":
//         state = {
//             ...state,
//             age:action.payload
//         };     
//         break;
//     }
//     return state;
// };

//Throw that into applyMiddleware
// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action : ",action);
//     next(action);
// }


//Move to store.js

// const store = createStore(combineReducers({
//     math:mathReducer,user:userReducer
//     }),
//     {},
//     applyMiddleware(logger)
// );



// store.subscribe(()=>{
//     console.log("Store Update!",store.getState())
// });

// store.dispatch({
//     type:"ADD",
//     payload: 15
// });

// store.dispatch({
//     type:"SET_NAME",
//     payload: "THANAPHOOM"
// });


// store.dispatch({
//     type:"SUBTRACT",
//     payload: 10
// });
// store.dispatch({
//     type:"MULTIPLY",
//     payload: 15
// });


// store.dispatch({
//     type:"SET_AGE",
//     payload: 30
// });


// store.dispatch({
//     type:"DIVIDE",
//     payload: 5
// });




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
