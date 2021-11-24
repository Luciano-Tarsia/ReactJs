//import logo from './logo.svg';
//import './App.css';

import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hello, World1"/>
    </div>
  );
}

export default App;
