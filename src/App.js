import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Products from './components/Products';
import Navbar from './components/Navbar';


const App = () => {
  return (
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Products/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
         </BrowserRouter>
  )
}

export default App