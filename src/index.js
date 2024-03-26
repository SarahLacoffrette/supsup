import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Login from './Pages/Connexion/Login';
import Register from './Pages/Connexion/Register';
import Dashboard from './Pages/Carte/Dashboard';
import MarketPlaceTrajet from "./Pages/Marketplace/MarketPlaceTrajet";
import Error from "./Pages/Error";
import Card from "./Pages/Carte/Card";
import Profile from "./Pages/Profile";
import Destination from "./Pages/Destination/Destination";
import Interne from "./Pages/Destination/Interne";
import Externe from "./Pages/Destination/Externe";
import SellCard from "./Pages/Carte/SellCard";
import ExchangeCard from "./Pages/Carte/ExchangeCard";
import MarketPlaceCard from "./Pages/Marketplace/MarketPlaceCard";
import DashboardAdmin from "./Pages/Administrateur/DashboardAdmin";
import AddTrajet from "./Pages/Administrateur/AddTrajet";
import AddCarte from "./Pages/Administrateur/AddCarte";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/shop"} component={MarketPlaceTrajet} element={<MarketPlaceTrajet/>}/>
            <Route path={"/card"} element={<Card/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/destinationI/:data"} component={Interne}  element={<Interne/>}/>
            <Route path={"/destinationE/:data"} component={Externe}  element={<Externe/>}/>
            <Route path={"/destination"} exact component={Destination} element={<Destination/>} />
            <Route path={"/sellCard"} element={<SellCard/>}/>
            <Route path={"/exchangeCard"} element={<ExchangeCard/>}/>
            <Route path={"/marketPlaceCard"} element={<MarketPlaceCard/>}/>
            <Route path={"/dashboardAdmin"} element={<DashboardAdmin/>}/>
            <Route path={"/addTrajet"} element={<AddTrajet/>}/>
            <Route path={"/addCarte"} element={<AddCarte/>}/>
            <Route path={"*"} element={<Error/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
