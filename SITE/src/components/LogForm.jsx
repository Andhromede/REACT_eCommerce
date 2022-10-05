import '../assets/css/inscription.css';
import { Link } from 'react-router-dom';
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
            document.querySelector('[name="confirmPassword"]')?.classList.remove("is-invalid");
            document.querySelector('[name="password"]')?.classList.remove("is-invalid");
            const passwordConfirm = document.querySelector('[name="confirmPassword"]')?.value;

            if (!password) {
                document.querySelector('[name="password"]')?.classList.add("is-invalid");
                console.log("mots de passe obligatoire !");
            }
            else if (!passwordConfirm) {
                document.querySelector('[name="confirmPassword"]')?.classList.add("is-invalid");
                console.log(("Confirmation de mdp obligatoire !"));
            }
            else if (passwordConfirm && password !== passwordConfirm) {
                document.querySelector('[name="confirmPassword"]')?.classList.add("is-invalid");
                document.querySelector('[name="password"]')?.classList.add("is-invalid");
                console.log("mots de passe différents !");
            }
            else {
                document.querySelector('[name="confirmPassword"]')?.classList.remove("is-invalid");
                document.querySelector('[name="password"]')?.classList.remove("is-invalid");

                delete jsonData.confirmPassword;
                let bodyJson = JSON.stringify(jsonData);
                console.log(bodyJson);


                // fetch(`http://localhost:5001/auth/inscription`, {
                //     method: "put",
                //     headers: { "content-type": "application/json" },
                //     body: bodyJson

                // }).then((resp) => resp.text())
                //     .then((text) => {
                //         // const data = text.toJson();
                //         setAuth(text);
                //         // console.log(data);
                //     });


                axios.put(`http://localhost:5001/auth/inscription`, {
                            data: { jsonData }
                        }).then(res => {
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

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">

                    <div className="flex justify-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg> */}
                    </div>

                    <h3 className="text-2xl font-bold text-center">Join us</h3>

                    <form action="" onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="login">Login</label>
                                <input type="text" placeholder="Login" name="login" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <div className="mt-4">
                                <label className="block" htmlFor="email">Email</label>
                                <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <div className="mt-4">
                                <label className="block">Mots de passe</label>
                                <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <div className="mt-4">
                                <label className="block">Confirmation du mots de passe</label>
                                <input type="password" placeholder="confirmation" name="confirmPassword" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <span className="text-xs text-red-400">Les 2 mots de passe doivent être identiques !</span>

                            <div className="flex">
                                <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Créer un compte</button>
                            </div>

                            <div className="mt-6 text-grey-dark">
                                <span>Compte déjà éxistant ?</span>
                                <a className="text-blue-600 hover:underline" href="#">Connexion</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>





            // <form className="container-fluid body" onSubmit={handleSubmit}>
            //     <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">

            //         <div className="row gx-lg-5 align-items-center mb-5">
            //             <div className="col-lg-6 mb-5 mb-lg-0 zIndex">
            //                 <h1 className="my-5 display-5 fw-bold ls-tight color2">
            //                     {page} <br />
            //                 </h1>

            //                 {(page === "Inscription") &&
            //                     <p className="mb-4 opacity-70 color3 text-white">
            //                         Bienvenu sur le formulaire d'inscription.
            //                     </p>
            //                 }
            //             </div>


            //             <div className="col-lg-6 mb-5 mb-lg-0 position-relative">

            //                 <div className="px-4 px-md-3 py-md-5 circleSize bg-glass my-3 mx-auto border-radius">
            //                     <div className="card-body px-4 py-4 py-md-0 px-md-5">
            //                         <div className="mx-auto text-center">

            //                             {(page === "Inscription") &&
            //                                 <div className="row">
            //                                     <InputForm classDiv="form-outline mb-4 pt-3 pt-md-0 col-5 col-md-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule" name="matricule" id="matricule" type="text" />

            //                                     <div className="form-outline mb-4 col-5 pt-3 pt-md-0 col-md-6 mx-auto inputCo">
            //                                         <label className="form-label fw-bold txtVert">Service</label>
            //                                         <select className="form-select" name="idService" id="idService" aria-label="Default select example">
            //                                             <option value="1" name="1" key="uap">UAP Base</option>
            //                                             <option value="2" name="2" key="ha">UAP HA</option>
            //                                             <option value="3" name="3" key="hs">UAP HS</option>
            //                                             <option value="4" name="4" key="mp">MP</option>
            //                                             <option value="5" name="5" key="mg">MG</option>
            //                                         </select>
            //                                     </div>
            //                                 </div>
            //                             }

            //                             {(page === "Inscription") &&
            //                                 <div className="row">
            //                                     <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Nom" name="nom" id="nom" type="text" />
            //                                     <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Prenom" name="prenom" id="prenom" type="text" />
            //                                 </div>
            //                             }

            //                             {(page === "Connexion") &&
            //                                 <div className="row mb-4 mt-4 pt-5 pt-md-4">
            //                                     <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Matricule" name="matricule" id="matricule" type="text" />
            //                                     <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Password" name="password" id="password" type="password" />
            //                                 </div>
            //                             }

            //                             {(page === "Inscription") &&
            //                                 <div className="row mb-3">
            //                                     <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="Password" name="password" id="password" type="password" required />
            //                                     <InputForm classDiv="form-outline mb-4 col-6 mx-auto inputCo" classInput="form-control" classLabel="form-label fw-bold txtVert" intitule="ConfirmPassword" name="confirmPassword" id="confirmPassword" type="password" required />
            //                                 </div>
            //                             }

            //                             <div className="row">
            //                                 {(page === "Inscription") &&
            //                                     <button type="submit" className="btn bgVert text-light btn-block mb-4 mx-auto col-4 buttonCo">
            //                                         Inscription
            //                                     </button>
            //                                 }

            //                                 {(page === "Connexion") &&
            //                                     <button type="submit" className="btn bgVert text-light btn-block mb-4 mx-auto col-4 buttonCo">
            //                                         Connexion
            //                                     </button>
            //                                 }

            //                                 {(page === "Inscription") &&
            //                                     <div>
            //                                         <span className="text fw-bold">Déjà inscrit ?  </span>
            //                                         <Link className="text-warning" to={"/connexion"}>Se connecter</Link>
            //                                     </div>
            //                                 }

            //                                 {(page === "Connexion") &&
            //                                     <div className="txtCourbe">
            //                                         <span className="text fw-bold">Pas encore inscrit ? C'est </span>
            //                                         <Link className="text-warning" to={"/inscription"}>Par ici</Link>
            //                                     </div>
            //                                 }
            //                             </div>
            //                         </div>

            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </form>
        );

    }

    export default LogForm;








