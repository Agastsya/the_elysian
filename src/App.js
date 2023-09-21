import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Home and Constant Imports
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NewArrivals from './components/categories/NewArrivals.jsx';
import ProductDetails from './components/ProductDetails.jsx';

import Category from './components/categories/Category.jsx';
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
import GetHelp from './components/Services/GetHelp.jsx';
import Blog from './components/Services/Blog.jsx';
import BlogDetails from './components/Services/BlogDetails.jsx';
import Cart from './components/Cart.jsx';
import Test from './components/searchfilter/Test.jsx';

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
        <Route
          path={'/jewelery'}
          element={<Category uniqueName="jewelery" />}
        />
        <Route
          path={'/men'}
          element={<Category uniqueName="men's clothing" />}
        />
        <Route
          path={'/electronics'}
          element={<Category uniqueName="electronics" />}
        />
        <Route
          path={'/women'}
          element={<Category uniqueName="women's clothing" />}
        />

        {/*User Account Pages*/}
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />

        {/*Top Right Header Pages*/}
        <Route path={'/resources'} element={<Resources />} />
        <Route path={'/findus'} element={<Findus />} />
        <Route path={'/resources/support'} element={<GetHelp />} />
        <Route path={'/resources/faq'} element={<Faq />} />
        <Route path={'/products/:id'} element={<ProductDetails />} />
        <Route path={'/resources/blog'} element={<Blog />} />
        <Route path={'/resources/blog/:id'} element={<BlogDetails />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/tester'} element={<Test />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
