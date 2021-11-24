//import logo from './logo.svg';
//import './App.css';

import { ItemCount } from "./componentes/ItemCount/ItemCount";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hello, World1"/>
      <ItemCount />
    </div>
  );
}

export default App;
