import './App.css';
import Body from './component/Body';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Product from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageBody from './component/PageBody';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
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
