import { useSelector } from 'react-redux';
import { productsInBasket } from '../redux/slice/productSlice';
import React from 'react';
import ProductCard from "../components/ProductCard";
// import { productsInBasket } from '../redux/slice/productSlice';



const PanierView = () => {


    return (
        <>
          {/* <div className="pb-8 pt-12"> */}
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ProductCard tablo={useSelector(productsInBasket)} />
        </div>
        </>

    );
}


export default PanierView;
