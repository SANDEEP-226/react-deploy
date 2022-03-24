import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Body from './component/Body';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Product from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageBody from './component/PageBody';
import Banner from './component/Body/Banner';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Banner />
        <Routes className="center">
          <Route path="/" exact element={<Body />} />
          <Route path="/:routeName/:pageId" exact element={<PageBody />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
