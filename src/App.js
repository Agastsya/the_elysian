import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Home and Constant Imports
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NewArrivals from './components/categories/NewArrivals.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Men from './components/categories/Men.jsx';
import Jewelery from './components/categories/Jewelery.jsx';
import Electronics from './components/categories/Electronics.jsx';
import Women from './components/categories/Women.jsx';
// Top Right Header Links
import Resources from './components/Resources.jsx';
import Findus from './components/Findus.jsx';
import Faq from './components/Services/Faq.jsx';
// User Account
import Register from './components/userAccount/Register.jsx';
import Login from './components/userAccount/Login.jsx';
//Other Package Imports
import { Toaster } from 'react-hot-toast';
import { styled } from 'styled-components';

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
        <Route path={'/contact'} element={<Contact />} />

        {/*Shopping Pages*/}
        <Route path={'/newarrivals'} element={<NewArrivals />} />
        <Route path={'/jewelery'} element={<Jewelery />} />
        <Route path={'/men'} element={<Men />} />
        <Route path={'/electronics'} element={<Electronics />} />
        <Route path={'/women'} element={<Women />} />

        {/*User Account Pages*/}
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />

        {/*Top Right Header Pages*/}
        <Route path={'/resources'} element={<Resources />} />
        <Route path={'/findus'} element={<Findus />} />
        <Route path={'/services/faq'} element={<Faq />} />
        <Route path={'/products/:id'} element={<ProductDetails />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
