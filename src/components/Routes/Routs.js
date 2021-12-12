import React from "react";
import Products from "../Products/Products";
import { Routes, Route } from "react-router-dom";
import Confirmation from "../Confirmation/Confirmation";
import Panier from "../Panier/Panier";
import Details from "../Details/Details";

const Routs = ({
  productItems,
  cartItems,
  iTems,
  showDetails,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  confirmationPage,
  
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Products
            showDetails={showDetails}
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/Panier"
          exact
          element={
            <Panier
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              confirmationPage={confirmationPage}
            />
          }
        />
        <Route
          path="/Details"
          exact
          element={
            <Details
            
              showDetails={showDetails}
              iTems={iTems}
              productItems={productItems}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              confirmationPage={confirmationPage}
            />
          }
        />
        <Route
          path="/Confirmation"
          exact
          element={
            <Confirmation
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              confirmationPage={confirmationPage}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routs;
