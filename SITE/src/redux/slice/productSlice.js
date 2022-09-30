import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    nbr: 0
}

const minQte = 1;

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,

    /******** LISTE DES ACTIONS (generated for each case reducer function) ********/
    reducers: {
        addToBasket: (state, action) => {
            const productInBasket = state.products.find((item) => item.id === action.payload.id);
            
            if(productInBasket){
                (productInBasket.quantity++);
            }else{
                state.products.push({...action.payload, quantity: minQte});
                state.nbr = state.products.length;
            }
        },

        removeToBasket: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
            state.products === 0 ? state.products = 0 : state.products--;
        },

        incrementQte: (state, action) => {
            const productInBasket = state.products.find((item) => item.id === action.payload.id);
            productInBasket.quantity++;
            // state.nbr += 1;
        },

        decrementQte: (state, action) => {
            const productInBasket = state.products.find((item) => item.id === action.payload.id);
            productInBasket.quantity === minQte-1 ? productInBasket.quantity = minQte-1 : productInBasket.quantity--;
            // state.nbr -= 1;
        },

        // incrementByAmount: (state, action) => {
        //     state.nbr += action.payload;
        // },
    },
})

export const selectNbr = (state) => state.product.nbr;
export const { incrementQte, decrementQte, addToBasket, removeToBasket } = productSlice.actions;

export default productSlice.reducer;









// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer