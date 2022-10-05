import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import './assets/css/App.css';
import BaseView from "./vues/BaseView";
import PanierView from "./vues/PanierView";
import HomeView from "./vues/HomeView";
import LoadingSpinner from "./components/LoadingSpinner";


// const HomeView = React.lazy(() => import("./vues/HomeView"));
const DetailProduitView = React.lazy(() => import("./vues/DetailProductView"));
const ErrorView = React.lazy(() => import("./vues/ErrorView"));
const LoginView = React.lazy(() => import("./vues/auth/LoginView"));
const LogoutView = React.lazy(() => import("./vues/auth/LogoutView"));
const InscriptionView = React.lazy(() => import("./vues/auth/InscriptionView"));
// const PanierView = React.lazy(() => import("./vues/PanierView"));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BaseView/>}>
                        <Route index element={<Suspense fallback={<LoadingSpinner/>}> <HomeView/> </Suspense>}/>
                        <Route path="/home" element={<Suspense fallback={<LoadingSpinner/>}> <HomeView/> </Suspense>}/>
                        <Route path="/produit/:id" element={<Suspense fallback={<LoadingSpinner/>}> <DetailProduitView/> </Suspense>}/>
                        <Route path="/panier" element={<Suspense fallback={<LoadingSpinner/>}> <PanierView/> </Suspense>}/>

                        <Route path="/login" element={<Suspense fallback={<LoadingSpinner/>}> <LoginView/> </Suspense>}/>
                        <Route path="/logout" element={<Suspense fallback={<LoadingSpinner/>}> <LogoutView/> </Suspense>}/>
                        <Route path="/inscription" element={<Suspense fallback={<LoadingSpinner/>}> <InscriptionView/> </Suspense>}/>
                    </Route>
                    <Route path="*" element={<Suspense fallback={<LoadingSpinner/>}> <ErrorView/> </Suspense>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
