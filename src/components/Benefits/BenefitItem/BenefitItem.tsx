import React from "react";
import "./BenefitItem.scss";

interface IBenefitItemProps {
  svg: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<IBenefitItemProps> = ({
  svg,
  title,
  description,
}) => {
  return (
    <div className="benefit-item">
      <img src={svg} alt={title} className="benefit-item__icon" />
      <div className="benefit-item__content">
        <h3 className="benefit-item__title">{title}</h3>
        <p className="benefit-item__description">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
