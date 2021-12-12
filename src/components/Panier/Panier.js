import React from "react";
import "./Panier.css";
import { Link } from "react-router-dom";

const Panier = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  confirmationPage,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
    <div className="cart-items-header"> <h3>Produits ajoutés au panier</h3>  </div>
    <div className="clear-cart">
        {cartItems.length >=1 && (
        <button className="clear-cart-button" onClick={handleCartClearance}><i class="far fa-trash-alt"></i></button>
        )}
    </div>

    {cartItems.length === 0 && (
        <h2 className="cart-items-empty"> Aucun produit ajouté au panier  </h2>
    )}

    <div>
         {cartItems.map((item) => (
             <div key={item.id} className="cart-items-list">
                 <img 
                 className="cart-items-image"
                 src={item.image}
                 alt={item.name}
                 />

                <div className="cart-items-name">{item.name}</div>
                <div className="cart-items-function">
                    <button 
                    className="cart-items-add" 
                    onClick={() => handleAddProduct(item)}>
                        +
                    </button>
                    <button type="button"
                    className="cart-items-remove" 
                    onClick={() => handleRemoveProduct(item)}>
                        -
                    </button>
                 </div>

                    <div className="cart-items-price">
                        {item.quantity} *  {item.price} DT

                    </div>
                </div>    

                
                 

         ))}


    </div>


  

    <div className="cart-items-total-price-name">
        Prix Total :
        <div className="cart-items-total-price">  {totalPrice} DT</div>
        </div>

        {cartItems.length >=1 && (

<div className="confirm-achat" >
        
        <Link to="/confirmation" >
        <button className="confirm-achat-button" onclick={confirmationPage}>  <i class="fas fa-check-circle"></i> Confirmer l'achat</button>
                </Link>
       </div>
)}
    </div>
    

    
    


    );
};

export default Panier;
