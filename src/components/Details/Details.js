import React from "react";
import "./Details.css";

const Description = ({
  handleAddProduct,
  iTems,
  
  
}) => {
  return (
    <div className="det-items">
      <div>
        {iTems.map((item) => (
          <div>
            <div>
              <h2 className="det-name">{item.name}</h2>
            </div>
            <div className="det-item">
              <img className="img" src={item.image} alt={item.name} />

              <div className="det-desc">
                <p>{item.description}</p>
              </div>
              <div className="det-comp">
                <h2 className="det-price">{item.price},000 DT</h2>
                <button
                  className="btn btn-warning my-3 "
                  onClick={() => handleAddProduct(item)}
                >
                  Ajouter<i class="fas fa-shopping-cart"></i>
                </button>

                <div className="quantity-detail"> Quantité : {item.quantity}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Description;
