import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Connexion from './Pages/Connexion/Connexion';
import Inscription from './Pages/Connexion/Inscription';
import TableauDeBord from './Pages/Carte/TableauDeBord';
import MarketPlaceTrajet from "./Pages/Marketplace/MarketPlaceTrajet";
import Error from "./Pages/Error";
import MarketPlaceCarte from "./Pages/Carte/MarketPlaceCarte";
import Profile from "./Pages/Profile";
import Destination from "./Pages/Destination/Destination";
import Interne from "./Pages/Destination/Interne";
import Externe from "./Pages/Destination/Externe";
import VenteCarte from "./Pages/Carte/VenteCarte";
import EchangeCarte from "./Pages/Carte/EchangeCarte";
import MarketPlaceCard from "./Pages/Marketplace/MarketPlaceCard";
import TableauDeBordAdmin from "./Pages/Administrateur/TableauDeBordAdmin";
import AddTrajet from "./Pages/Administrateur/AddTrajet";
import AddCarte from "./Pages/Administrateur/AddCarte";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/connexion"} element={<Connexion/>}/>
            <Route path={"/inscription"} element={<Inscription/>}/>
            <Route path={"/tableauDeBord"} element={<TableauDeBord/>}/>
            <Route path={"/shop"} component={MarketPlaceTrajet} element={<MarketPlaceTrajet/>}/>
            <Route path={"/marketPlaceCarte"} element={<MarketPlaceCarte/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/destinationI/:data"} component={Interne}  element={<Interne/>}/>
            <Route path={"/destinationE/:data"} component={Externe}  element={<Externe/>}/>
            <Route path={"/destination"} exact component={Destination} element={<Destination/>} />
            <Route path={"/venteCarte"} element={<VenteCarte/>}/>
            <Route path={"/echangeCarte"} element={<EchangeCarte/>}/>
            <Route path={"/marketPlaceCard"} element={<MarketPlaceCard/>}/>
            <Route path={"/tableaudebordadmin"} element={<TableauDeBordAdmin/>}/>
            <Route path={"/addTrajet"} element={<AddTrajet/>}/>
            <Route path={"/addCarte"} element={<AddCarte/>}/>
            <Route path={"*"} element={<Error/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
