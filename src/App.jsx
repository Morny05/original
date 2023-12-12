import Home from './component/home/Home';
import Navbar from './component/header/Navbar';
import {Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Registred from './pages/login/Registred';
import Product from './component/products/Products';
import Account from './pages/account/Account';
import Panier from './component/Panier';
import { Footer } from './component/footer/Footer';
//import 'styles.css';

function App(){
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>        
        <Route path='/home' element={<Home/>}/>        
        <Route path='/products' element={<Product />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registred' element={<Registred/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/panier' element={<Panier/>} />  
      </Routes>
      <Navbar/>
      <Footer/>
    </>
  );
}
export default App;
