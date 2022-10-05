import { useSelector } from 'react-redux';
import { productsInBasket } from '../redux/slice/productSlice';
import React from 'react';
import ProductCard from "../components/ProductCard";
// import { productsInBasket } from '../redux/slice/productSlice';



const PanierView = () => {


    return (
        <>
          <div className="pb-8">
            <ProductCard tablo={useSelector(productsInBasket)} />
        </div>
        </>

    );
}


export default PanierView;
