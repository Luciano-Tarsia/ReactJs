import { NavBar } from './componentes/NavBar/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './componentes/CartView/CartView';
import { CartProvider } from './context/CartContext';
import { Checkout } from './componentes/Checkout/Checkout';

function App() {


  return (

    <CartProvider>

      <BrowserRouter>
      
          <NavBar />

          <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
            <Route path="/cart" element={ <CartView/>} />
            <Route path="/checkout" element={ <Checkout/>} />
            <Route path="*" element={ <Navigate to="/"/> } />
          </Routes>
        
      </BrowserRouter>

    </CartProvider>

  
  );
}

export default App;