import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Body from './component/Body';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Product from './component/Product';
import Banner from './component/Body/Banner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Banner />
        <Routes className="center">
          <Route path="/" exact element={<Body />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route>404 not found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
