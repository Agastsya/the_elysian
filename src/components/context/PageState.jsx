import { useState } from 'react';
import PageContext from './PageContext';
import { toast } from 'react-hot-toast';

const PageState = props => {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  // ADD TO CART FUNCTION

  const addToCart = prod => {
    if (!isAuthenticated) {
      toast.error('Login to add to cart');
      return;
    }
    const existingItem = cartItems.find(item => item.id === prod.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map(item =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
      toast.success('Quantity updated in cart');
    } else {
      setCartItems([...cartItems, { ...prod, quantity: 1 }]);
      toast.success('Item added to cart');
    }
  };

  //TOTAL PRICE

  const TotalPrice = () => {
    let TotalPrice = 0;

    cartItems.forEach(i => {
      TotalPrice += i.price * i.quantity;
    });
    return TotalPrice;
  };

  // REMOVE THE WHOLE OBJECT FROM CART

  const removeCartItem = productId => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    toast.success('Item removed from cart');
  };

  //Empty Cart
  const emptyCart = () => {
    setCartItems([]);
  };

  // REMOVE QUANTITY FROM CART

  const reduceCart = prod => {
    const existingItem = cartItems.find(item => item.id === prod.id);

    if (existingItem.length !== 1) {
      const updatedCartItems = cartItems.map(item =>
        item.id === existingItem.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...prod, quantity: 1 }]);
    }
  };

  return (
    <PageContext.Provider
      value={{
        cartItems,
        setCartItems,
        reduceCart,
        addToCart,
        removeCartItem,
        emptyCart,
        TotalPrice,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
