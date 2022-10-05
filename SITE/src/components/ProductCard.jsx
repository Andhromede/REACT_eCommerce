import { FaShoppingBasket } from 'react-icons/fa';
import React from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { productsInBasket, addToBasket, removeToBasket } from '../redux/slice/productSlice';
import { useEffect } from "react";



function ProductCard(props) {
    const { tablo, item } = props;
    // const count = useSelector((state) => state.product.nbr);

    const tabProducts = useSelector(productsInBasket);
    const panier = useDispatch();

    // function addProducts(item){
    //     panier(addToBasket({item}));
    // }


    return (
        <>
            {(tablo) &&
                tablo.map((item) => {
                    // console.log(item);
                    return (
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block mt-8 mr-8 h-110 w-96" key={item.Id_produit}>
                            <a href="#">
                                <img className="p-8 rounded-t-lg " src={item.image} alt="product image" />
                                {/* <img className="p-8 rounded-t-lg" src={process.env.PUBLIC_URL + "/assets/images/des_nain.jpg"} alt="product image"/> */}
                            </a>

                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.nom}</h5>
                                </a>

                                {/* <div className="flex items-center mt-2.5 mb-5">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                </div> */}

                                <div className="flex justify-between items-center pt-5">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.prix_ttc}€</span>

                                    {(tabProducts.find((objects) => objects.Id_produit === item.Id_produit) &&
                                        <a id={item.Id_produit} name="btnRemove" className="flex text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={() => panier(removeToBasket(item))}>
                                            <span className="mr-1">Enlever ({tabProducts.find((objects) => objects.Id_produit === item.Id_produit).quantity})</span>
                                        </a>
                                    )}

                                    <a id={item.Id_produit} name="btnAdd" className="flex text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" onClick={() => panier(addToBasket(item))}>
                                        <span className="mr-1">Ajouter au</span>
                                        <FaShoppingBasket className="mt-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}




            {(item) &&
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block mt-8 mr-8 h-110 w-96" key={item.Id_produit}>
                    <a href="#">
                        <img className="p-8 rounded-t-lg " src={item.image} alt="product image" />
                        {/* <img className="p-8 rounded-t-lg" src={process.env.PUBLIC_URL + "/assets/images/des_nain.jpg"} alt="product image"/> */}
                    </a>

                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.nom}</h5>
                        </a>

                        <div className="flex justify-between items-center pt-5">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.prix_ttc}€</span>

                            {(tabProducts.find((objects) => objects.Id_produit === item.Id_produit) &&
                                <a id={item.Id_produit} name="btnRemove" className="flex text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={() => panier(removeToBasket(item))}>
                                    <span className="mr-1">Enlever ({tabProducts.find((objects) => objects.Id_produit === item.Id_produit).quantity})</span>
                                </a>
                            )}

                            <a id={item.Id_produit} name="btnAdd" className="flex text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" onClick={() => panier(addToBasket(item))}>
                                <span className="mr-1">Ajouter au</span>
                                <FaShoppingBasket className="mt-1" />
                            </a>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

export default ProductCard;