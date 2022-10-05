import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    nbr: 0
}

const minQte = 1;

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,

    reducers: {
        /******** Ajoute/incrémente au panier ********/
        addToBasket: (state, action) => {
            let productInBasket = state.products.find((item) => item.Id_produit === action.payload.Id_produit);

            if(productInBasket){
                (productInBasket.quantity++);
            }else{
                state.products.push({...action.payload, quantity: minQte});
                // state.nbr = state.products.length;
            }
            state.nbr += 1;

            // localStorage.setItem("produit", productInBasket);
            // localStorage.setItem("nbr", state.nbr);
            // console.log(localStorage);
        },


        /******** Décrémente/supprime du panier ********/
        removeToBasket: (state, action) => {
            const productInBasket = state.products.find((item) => item.Id_produit === action.payload.Id_produit);

            if(productInBasket){
                if(productInBasket.quantity <= 1){
                    state.products = state.products.filter((item) => item.Id_produit !== action.payload.Id_produit);
                }else{
                    productInBasket.quantity--;
                }
                state.nbr -= 1;
                // localStorage.setItem("produits", state.products);
                // console.log(localStorage);
            }
        },

    },
})

export const selectNbr = (state) => state.product.nbr;
export const productsInBasket = (state) => state.product.products;
export const { addToBasket, removeToBasket } = productSlice.actions;

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