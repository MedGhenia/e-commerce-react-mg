import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import data from "./components/Data/Data";
import Navbar from './components/Navbar/Navbar';
import Routs from "./components/Routes/Routs";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [iTems, setiTems] = useState([1]);

  const showDetails = (product) => {
    const ProductExist = iTems.find((item) => item.id === product.id);
    
    if (ProductExist) {
      setiTems(
        iTems.map((item) =>
          item.id === product.id ? { ...ProductExist } : item
        )
      );
    } else {
      setiTems([{ ...product }]);
    }
  };



  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Router>
        <Navbar cartItems={cartItems} />
        <Routs
          productItems={productItems}
          cartItems={cartItems}
          iTems={iTems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          showDetails={showDetails}
          
        />
      </Router>
    </div>
  );
};

export default App;
