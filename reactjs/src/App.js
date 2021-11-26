//import logo from './logo.svg';
//import './App.css';

//import { ItemCount } from "./componentes/ItemCount/ItemCount";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemDetailContainer/>
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
