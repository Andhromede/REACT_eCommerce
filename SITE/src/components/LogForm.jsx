import '../assets/css/inscription.css';
import { Link, NavLink } from 'react-router-dom';
// import InputForm from '../components/InputForm';
// import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from 'react';
import axios from 'axios';


const LogForm = (props) => {
    const { page } = props;
    const [auth, setAuth] = useState([]);
    const navigate = useNavigate();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const password = document.querySelector('[name="password"]').value;

        if (page === "Inscription") {
            const inputErrorMdp = document.querySelector('[name="errorMdp"]');
            const inputErrorConfirm = document.querySelector('[name="errorConfirm"]');
            const inputBadConfirmp = document.querySelector('[name="badConfirm"]');
            const confirmPassword = document.querySelector('[name="confirmPassword"]');
            const passwordConfirm = confirmPassword?.value;

            inputErrorMdp?.classList.add("hidden");
            inputErrorConfirm?.classList.add("hidden");
            inputBadConfirmp?.classList.add("hidden");

            if (!password) {
                inputErrorMdp?.classList.remove("hidden");
            }
            else if (!passwordConfirm) {
                inputErrorConfirm?.classList.remove("hidden");
            }
            else if (passwordConfirm && password !== passwordConfirm) {
                inputBadConfirmp?.classList.remove("hidden");
            }
            else {
                inputErrorMdp?.classList.add("hidden");
                inputErrorConfirm?.classList.add("hidden");
                inputBadConfirmp?.classList.add("hidden");
                delete jsonData.confirmPassword;

                axios.put('http://localhost:5001/auth/inscription', jsonData)
                    .then(res => {
                        setAuth(res.data);
                        console.log(res.data);
                    }, []);
            }
        }


        // if (page === "Connexion") {
        //     document.querySelector('[name="password"]')?.classList.remove("is-invalid");

        //     if (!password) {
        //         document.querySelector('[name="password"]')?.classList.add("is-invalid");
        //     }
        //     else {
        //         document.querySelector('[name="password"]')?.classList.remove("is-invalid");
        //         let bodyJson = JSON.stringify(jsonData);
        //         // console.log(bodyJson);


        //         fetch(`https://localhost:7027/api/security/connexion`, {
        //             method: "post",
        //             headers: { "content-type": "application/json" },
        //             body: bodyJson

        //         }).then((resp) => resp.text())
        //             .then((text) => {
        //                 const data = text.toJson();
        //                 // console.log(data.result);

        //                 if (data.result) {
        //                     document.cookie = `auth=${data.token};max-age=${60 * 60 * 24}`;
        //                     setAuth({ role: data.role, id: data.id });
        //                     navigate("/accueil");
        //                 }
        //                 else {
        //                     document.cookie = `auth=null;max-age=0`;
        //                     setAuth({ role: 0, id: data.id });
        //                     navigate("/connexion");
        //                 }
        //             });
        //     }
        // }
    }

    return (

        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="rounded-lg bg-gray-900 px-8 py-6 mx-4 mt-4 text-left shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">

                    {(page === "Inscription") &&
                        <h3 className="text-2xl font-bold text-center mb-5 text-white">INSCRIPTION</h3>
                    }

                    {(page === "Connexion") &&
                        <h3 className="text-2xl font-bold text-center mb-5 text-white">Connexion</h3>
                    }

                    <form action="" onSubmit={handleSubmit}>
                        <div className="mt-4 text-white">
                            <div>
                                <label className="block" htmlFor="login">Login</label>
                                <input type="text" placeholder="Login" name="login" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                            </div>

                            <div className="mt-4">
                                <label className="block" htmlFor="email">Email</label>
                                <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                            </div>

                            <div className="mt-4">
                                <label className="block">Mots de passe</label>
                                <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                            </div>

                            {/* <span name='errorMdp' className="hidden errorMdp text-xs text-red-400">Un mots de passe est obligatoire !</span> */}

                            {(page === "Inscription") &&
                                <div className="mt-4">
                                    <label className="block">Confirmation du mots de passe</label>
                                    <input type="password" placeholder="confirmation" name="confirmPassword" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                                </div>
                            }

                            <span name='badConfirm' className="hidden errorMdp text-xs text-red-400">Les 2 mots de passe doivent être identiques !</span>
                            {/* <span name='ErrorConfirm' className="hidden errorMdp text-xs text-red-400">Une confirmation de mots de passe est obligatoire !</span> */}



                            {(page === "Inscription") &&
                                <>
                                    <div className="flex mt-5">
                                        <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-900">Créer un compte</button>
                                    </div>

                                    <div className="mt-6 text-grey-dark">
                                        <span>Déjà inscrit ? </span>
                                        <Link className="text-orange-600 hover:underline" to={"/login"}>Se connecter</Link>
                                    </div>
                                </>
                            }

                            {(page === "Connexion") &&
                                <>
                                    <div className="flex mt-5">
                                        <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-900">Connexion</button>
                                    </div>

                                    <div className="mt-6 text-grey-dark">
                                        <span>Pas encore de compte ? </span>
                                        <Link className="text-orange-600 hover:underline" to={"/inscription"}>S'inscrire</Link>
                                    </div>
                                </>
                            }

                            {/* <div className="mt-6 text-grey-dark">
                                <span>Déjà inscrit ? </span>
                                <a className="text-orange-600 hover:underline" href="#">Se connecter</a>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </>


    );

}

export default LogForm;








