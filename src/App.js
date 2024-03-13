
import Home from "./components/Home";
import {Routes,Route} from 'react-router-dom'
import AddProducts from "./components/routes/AddProducts";
import ProductsList from "./components/routes/ProductsList";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/addProducts' element={<AddProducts/>}/>
        <Route path='/products/:search' element={<ProductsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
