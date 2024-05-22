import React from "react";
import "./CheckoutProduct.scss";

interface ICheckoutProductProps {
  imageUrl: string;
  quantity: number;
  name: string;
}

const CheckoutProduct: React.FC<ICheckoutProductProps> = ({
  imageUrl,
  quantity,
  name,
}) => {
  return (
    <div className="product-container">
      <div className="image-wrapper">
        <img src={imageUrl} alt="Product" className="product-image" />
        <div className="quantity">{quantity}</div>
      </div>
      <div className="title">{name}</div>
    </div>
  );
};

export default CheckoutProduct;
