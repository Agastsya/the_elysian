import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import NewArrivals from './components/NewArrivals';
import ProductDetails from './components/ProductDetails.jsx';
import Men from './components/Men.jsx';
import Jewelery from './components/Jewelery.jsx';
import Electronics from './components/Electronics.jsx';
import Women from './components/Women.jsx';
import Footer from './components/Footer.jsx';
import { styled } from 'styled-components';
import Resources from './components/Resources.jsx';
import Findus from './components/Findus.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

export const GlobalStyle = styled.body`
  body {
    padding: 0;
    margin: 0;
    background-color: #a7f3d0;
    font-family: 'Arbutus Slab', serif;
  }
`;

function App() {
  return (
    <Router>
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
        <Route path={'/resources'} element={<Resources />} />
        <Route path={'/findus'} element={<Findus />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
