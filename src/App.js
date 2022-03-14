import './App.css';
import Body from './component/Body';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Product from "./component/Product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {  
  return (
    <div className="container">
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" exact element={<Body/>}/>
              <Route path="/product/:productId"  element={<Product/>}/>
              <Route>404 not found!</Route>
          </Routes>
          <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
