import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutPrice from "../CheckoutPrice/CheckoutPrice";
import Benefits from "../Benefits/Benefits";
import productPicture from "../../resources/images/product.png";
import "./Checkout.scss";

const Checkout: React.FC = () => {
  return (
    <div className="checkout-container">
      <div className="grid-checkout-form">
        <CheckoutForm />
      </div>
      <div className="grid-checkout-price">
        <CheckoutPrice
          imageUrl={productPicture}
          quantity={3}
          productName="Garmin Watch"
          price="$299.97"
          subtotal="$299.97"
          total="$299.97"
        />
      </div>
      <div className="grid-benefits">
        <Benefits />
      </div>
    </div>
  );
};

export default Checkout;
