import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './assets/css/App.css';
import BaseView from "./vues/BaseView";

const HomeView = React.lazy(() => import("./vues/HomeView"));
const DetailProduitView = React.lazy(() => import("./vues/DetailProductView"));
const ErrorView = React.lazy(() => import("./vues/ErrorView"));
const LoginView = React.lazy(() => import("./vues/auth/LoginView"));
const LogoutView = React.lazy(() => import("./vues/auth/LogoutView"));
const Inscription = React.lazy(() => import("./vues/auth/InscriptionView"));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BaseView/>}>
                        <Route index element={<HomeView/>}/>
                        <Route path="/home" element={<HomeView/>}/>
                        <Route path="/produit/:id" element={<DetailProduitView/>}/>

                        <Route path="/login" element={<LoginView />} />
                        <Route path="/logout" element={<LogoutView />} />
                        <Route path="/inscription" element={<Inscription />} />
                    </Route>
                    <Route path="*" element={<ErrorView/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
