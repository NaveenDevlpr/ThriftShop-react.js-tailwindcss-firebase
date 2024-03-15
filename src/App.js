
import Home from "./components/Home";
import {Routes,Route} from 'react-router-dom'
import AddProducts from "./components/routes/AddProducts";
import ProductsList from "./components/routes/ProductsList";
import Header from "./components/home/Header";
import CartList from "./components/routes/cart/CartList"
import {useLocation, useNavigate} from 'react-router-dom'
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

 
  const noHeaderRoutes = ['/auth'];

  
  const isNoHeaderRoute = noHeaderRoutes.some(route => location.pathname.startsWith(route));

  
  const renderHeader = !isNoHeaderRoute && <Header />;
  return (
    <>
      {
        renderHeader&&<div className='p-4 mx-auto max-w-7xl'>
        {renderHeader}
      </div>
      }
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/addProducts' element={<AddProducts/>}/>
        <Route path='/products/:field/:value' element={<ProductsList/>}/>
        <Route path="/cart" element={<CartList/>}></Route>
        <Route path="/auth/register" element={<Register/>}/>
        <Route path="/auth/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
