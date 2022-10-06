import NavLink from './NavLink';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { useState, useEffect } from "react";
import axios from 'axios';
import { selectNbr } from '../redux/slice/productSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavBar() {
    const nbr = useSelector(selectNbr);
    // const [data, setData] = useState([]);

    // const getSearch = (evt) => {
    //     // const champ = evt.target.value;
    //     const where = `nom LIKE '%${evt.target.value}%'`;
    //     // console.log(where);

    //     axios.post(`http://localhost:5001/produit`, {
    //         method: "post",
    //         data: { where: where }
    //     }).then(res => {
    //         setData(res.data);
    //         console.log(res.data);
    //     }, []);
    // }

    return (
        <>
            <nav className="fixed  w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="collapse navbar-collapse flex items-center" id="navbarSupportedContent">
                        <NavLink classe="text-xl text-white pr-2 font-semibold" link="/home" text="MyShop" />


                        <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
                            {/* <li className="nav-item p-2">
                                <a className="nav-link text-white" href="#">Dashboard</a>
                            </li> */}

                            {/* <NavLink classe="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" text="Home" link="/home">Home</NavLink> */}
                            <NavLink classe="nav-link text-white opacity-90 hover:opacity-60 focus:opacity-60 p-0" text="Produits" link="/home" />
                        </ul>

                    </div>

                    {/* <div className="flex items-center relative">
                        <div className="flex items-center">
                            <div className="flex border border-orange-200 rounded">
                                <input onChange={getSearch} type="text" className="searchInput block w-full px-4 py-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recherche ..." />
                                <button className="px-4 text-white bg-orange-600 border-l rounded ">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex items-center relative">
                        <Link className="text-white opacity-90 hover:opacity-60 focus:opacity-60 p-0 mr-6" to={"/panier"}>
                            <FaShoppingBasket className="" />
                        </Link>
                        <span className="text-white bg-red-700 absolute rounded-full text-xs mt-5 ml-3 py-0 px-1.5"> {nbr} </span>

                        <NavLink classe="nav-link text-white opacity-90 hover:opacity-60 focus:opacity-60 p-0" text="Inscription" link="/inscription" />
                        {/* <NavLink classe="nav-link text-white opacity-90 hover:opacity-60 focus:opacity-60 p-0" text="Mon compte" link="/home" /> */}

                        <a className="text-white opacity-90 hover:opacity-60 focus:opacity-60 p-0 mr-4" href={"/home"} id="account" role="button">
                        {/* <a className="text-white opacity-90 hover:text-orange-400 p-0 mr-4" href={"/home"} id="account" role="button"> */}

                            <BsFillPersonLinesFill className="" />
                        </a>
                    </div>
                </div>
            </nav>
        </>


    );
}

export default NavBar;