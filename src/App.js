import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import Favorites from "./components/Favorites/Favorites";
import Cart from "./components/Cart/Cart";
import Accessories from "./components/Accessories/Accessories";
import Cardigans from "./components/Cardigans/Cardigans";
import Switers from "./components/Switers/Switers";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import AppContext from "./context";
import React from "react";

function App() {
    const [items, setItems] = React.useState([
        {
            "name": "Сумочка «лягушачья радость» 😮‍💨",
            "price": 2000,
            "imageUrl": "./img/acc1.png"
           },
           {
            "name": "Termit",
            "price": 4999,
            "imageUrl": "./img/acc2.png"
           },
           {
            "name": "Respect",
            "price": 8199,
            "imageUrl": "./img/acc3.png"
           },
           {
            "name": "Tervolia",
            "price": 4893,
            "imageUrl": "./img/acc4.png"
           },
           {
            "name": "Ecco",
            "price": 4999,
            "imageUrl": "./img/acc5.png"
           },
           {
            "name": "Tervolina",
            "price": 7192,
            "imageUrl": "./img/acc6.png"
           },
           {
            "name": "Terolina",
            "price": 4893,
            "imageUrl": "images/sn7.webp"
           },
           {
            "name": "Crosby",
            "price": 4299,
            "imageUrl": "images/sn8.webp"
           },
           {
            "name": "Ascalini",
            "price": 7410,
            "imageUrl": "images/sn9.webp"
           }
    ]);
  return (
    <AppContext.Provider value={items}>
    <div className="wrapper">
        <Header/>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/catalog" element={<Catalog/>}/>
         <Route path="/favorites" element={<Favorites/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/accessories" element={<Accessories items={items}/>}/>
         <Route path="/cardigans" element={<Cardigans/>}/>
         <Route path="/switers" element={<Switers/>}/>
        </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
