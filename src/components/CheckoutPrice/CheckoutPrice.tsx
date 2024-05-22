import React, { useState } from "react";
import "./CheckoutPrice.scss";
import arrowUp from "../../resources/images/arrow-up.svg";
import arrowDown from "../../resources/images/arrow-down.svg";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { EProductPrice } from "../../helpers/constants";

interface ICheckoutPriceProps {
  imageUrl: string;
  quantity: number;
  productName: string;
  price: string;
  subtotal: string;
  total: string;
}

const CheckoutPrice: React.FC<ICheckoutPriceProps> = ({
  imageUrl,
  quantity,
  productName,
  price,
  subtotal,
  total,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="checkout-price-component">
      <div
        className="order-overview"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <span className="overview-title">{EProductPrice.overview}</span>
          <span>
            {isExpanded ? (
              <img src={arrowUp} alt="close up" />
            ) : (
              <img src={arrowDown} alt="expand" />
            )}
          </span>
        </div>
        <div className="product-price">{total}</div>
      </div>

      {isExpanded && (
        <div className="order-details">
          <div className="first-separator" />
          <div className="row">
            <CheckoutProduct
              imageUrl={imageUrl}
              quantity={quantity}
              name={productName}
            />
            <div className="product-price">{price}</div>
          </div>
          <div className="separator" />
          <div className="row">
            <div className="subtotal-label">{EProductPrice.subtotal}</div>
            <div className="subtotal-price">{subtotal}</div>
          </div>
          <div className="separator" />
          <div className="row">
            <div className="total-label">{EProductPrice.total}</div>
            <div className="total-price">{total}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPrice;
