import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/slice/productSlice.js';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        product: productReducer
    },
    middleware:[
        thunk
    ]
})




// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../redux/slice/productSlice.js'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })