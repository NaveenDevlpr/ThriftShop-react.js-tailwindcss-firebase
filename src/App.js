
import Header from "./components/home/Header";
import Home from "./components/Home";
import {Routes,Route} from 'react-router-dom'
import AddProducts from "./components/routes/AddProducts";


function App() {
  return (
    <div>
      <div className='max-w-7xl mx-auto p-4'>
      <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/addProducts' element={<AddProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
