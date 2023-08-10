import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import NewArrivals from './components/NewArrivals';
import ProductDetails from './components/ProductDetails.jsx';
import { GlobalStyle } from './GlobalStyles.jsx';
import Men from './components/Men.jsx';
import Jewelery from './components/Jewelery.jsx';
import Electronics from './components/Electronics.jsx';
import Women from './components/Women.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'newarrivals'} element={<NewArrivals />} />
          <Route path={'/products:id'} element={<ProductDetails />} />
          <Route path={'/jewelery'} element={<Jewelery />} />
          <Route path={'/men'} element={<Men />} />
          <Route path={'/electronics'} element={<Electronics />} />
          <Route path={'/women'} element={<Women />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
