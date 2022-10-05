import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from 'axios';

const HomeView = () => {
    const [data, setData] = useState([]);
    const [dataProduit, setDataProduit] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5001/utilisateur', {
        //     method: "post",
        //     headers: { "content-type": "application/json", },
        //     body: JSON.stringify({ "where": "nom = 'Dujardin'" })

        // }).then((resp) => resp.text())
        //     .then((text) => {
        //         const data = JSON.parse(text);
        //         setData(data);
        //         // console.log(data);
        //     }).catch(console.log(data));


        // /********** GET ALL BY **********/
        // axios.post(`http://localhost:5001/utilisateur`, {
        //     method: "post",
        //     data: { where: "prenom = 'Jean'" }

        // }).then(res => {
        //     setData(res.data);
        // }, []);


        // /********** GET BY ID **********/
        // axios.get(`http://localhost:5001/utilisateur/2`)
        //     .then(res => {
        //         setData(res.data);
        //     }, []);

        /********** GET ALL **********/
        axios.get(`http://localhost:5001/produit`)
            .then(res => {
                setData(res.data);
            }, []);

        // console.log(data);
    }, []);


   

    const getSearch = (evt) => {
        // const champ = evt.target.value;
        const where = `nom LIKE '%${evt.target.value}%'`;
        // console.log(where);

        axios.post(`http://localhost:5001/produit`, {
            method: "post",
            data: { where: where }
        }).then(res => {
            setDataProduit(res.data);
            // console.log(res.data);
        }, []);
    }


    return (
        <div className="pb-8">
            
            <div className="mb-9">
                <div className="flex item-center">
                    <div className="flex border border-orange-200 rounded w-full">
                        <input onChange={getSearch} type="text" className="searchInput block w-full px-4 py-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recherche ..." />
                        <button className="px-4 text-white bg-orange-600 border-l rounded ">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {(dataProduit.length === 0 ) && 
                <ProductCard tablo={data} />
            }

            {(dataProduit.length !== 0) && 
                <ProductCard item={dataProduit}/>
                
                // <>{console.log(dataProduit)}</>
            }
            
        </div>
    );
}


export default HomeView;
