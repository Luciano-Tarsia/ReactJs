//import logo from './logo.svg';
//import './App.css';

//import { ItemCount } from "./componentes/ItemCount/ItemCount";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartView } from "./componentes/CartView/CartView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>
        <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="/cart" element={ <CartView/> }/>
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;