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
            "imageUrl": "./uploads/acc1.png"
           },
           {
            "name": "Лягушачья-кошачья шапочка-бини 🐸",
            "price": 2000,
            "imageUrl": "./uploads/acc2.png"
           },
           {
            "name": "Сумка - шоппер с Куроми 🤩",
            "price": 2500,
            "imageUrl": "./uploads/acc3.png"
           },
           {
            "name": "Сумочка-уточка на пуговичке 🐤",
            "price": 2000,
            "imageUrl": "./uploads/acc4.png"
           },
           {
            "name": "Митенки для настоящих готов🖤",
            "price": 1500,
            "imageUrl": "./uploads/acc5.png"
           },
           {
            "name": "Митенки маленьких принцесс 🧚",
            "price": 1500,
            "imageUrl": "./uploads/acc6.png"
           },
           {
            "name": "Укорочённый свитер «скоро осень» 🐛",
            "price": 3000,
            "imageUrl": "./uploads/sw1.png"
           },
           {
            "name": "Уютный свитер оверсайз 😌",
            "price": 5490,
            "imageUrl": "./uploads/sw2.png"
           },
           {
            "name": "Тёплый свитер «паучья любовь»🕷💕",
            "price": 5000,
            "imageUrl": "./uploads/sw3.png"
           },
           {
            "name": "Кардиган «ромашковое поле»🌼",
            "price": 5000,
            "imageUrl": "./uploads/card1.png"
           },
           {
            "name": "Воздушный кардиган из мохера «нежность»🍓",
            "price": 5000,
            "imageUrl": "./uploads/card2.png"
           },
           {
            "name": "Розовый кардиган йолдызлы🤯",
            "price": 5000,
            "imageUrl": "./uploads/card3.png"
           },
           {
            "name": "Кардиган «небо» 🌌",
            "price": 5000,
            "imageUrl": "./uploads/card4.png"
           },
           {
            "name": "Кофта «настоящий клоун» 🤡",
            "price": 5000,
            "imageUrl": "./uploads/card5.png"
           },
           {
            "name": "Мохеровый кардиган «сахарная вата»🍭",
            "price": 5000,
            "imageUrl": "./uploads/card6.png"
           },
           {
            "name": "Кардиган «небо» 🌌",
            "price": 5000,
            "imageUrl": "./uploads/sw3.png"
           },
           
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
