import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/slice/productSlice.js';

export const store = configureStore({
    reducer: {
        product: productReducer
    }
})




// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../redux/slice/productSlice.js'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })