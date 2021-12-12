import React from "react";
import "./Confirmation.css";

const Confirmation = ({
  cartItems,

}) => {
  const total = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="confirmation-items">
      <div className="confirmation-items-header">
        
        <h4 className="msg-confirmation">Achat effectué, merci pour votre fidélité !</h4>
      </div>

      <div className="confirmation-produits"> Les des produits achetés: </div>

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="confirmation-items-list">
            <img
              className="confirmation-items-image"
              src={item.image}
              alt={item.name}
            />

            <div className="confirmation-items-name">{item.name}</div>

            <div className="confirmation-items-price">
              {item.quantity} * {item.price} DT
            </div>
          </div>
        ))}
      </div>

      <div className="confirmation-items-total-price-name">
        Prix total de la commande &nbsp; =
        <div className="confirmation-items-total-price">
          {" "}
          &nbsp; {total} DT{" "}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
