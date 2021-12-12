import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
const Products = ({ 
  productItems, 
  handleAddProduct, 
  showDetails
  }) => {
  return (
    
     <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <Link to="/Details" style={{ textDecoration: "none" }}>
            <div>
              <img
                className="product-image"
                src={productItem.image}
                alt={productItem.name}
              />
            </div>
            <div>
              <h3 className="product-name">{productItem.name}</h3>
            </div>
          </Link>
          <div className="product-price"> {productItem.price},000 DT</div>
          <div>

           <div className="bloc-bas"> 
            <Link to="/Details" style={{ textDecoration: "none" }}>
              <button
                className="product-details-button"
                onClick={() => showDetails(productItem)}>
               Détails
              </button>
            </Link>
            <button
              className=" btn btn-warning my-3 product-add-button"
              onClick={() => handleAddProduct(productItem)}
            >
              + <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            </div>
          </div>
        </div>
      ))}
    

    <div className="signature">
      <p> Mohamed GHENIA : <i class="fab fa-linkedin"></i> linkedin.com/in/med-ghenia</p> </div>
    </div>
  );
};

export default Products;
