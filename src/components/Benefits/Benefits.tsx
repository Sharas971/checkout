import React from "react";
import BenefitItem from "./BenefitItem/BenefitItem";
import cashbackLogo from "../../resources/images/cashback.svg";
import ratingLogo from "../../resources/images/rating.svg";
import customerServiceLogo from "../../resources/images/customer-service.svg";
import { EBenefits } from "../../helpers/constants";
import "./Benefits.scss";

const Benefits: React.FC = () => {
  return (
    <div className="benefits">
      <h2 className="benefits__heading">{EBenefits.title}</h2>
      <div className="benefits__list">
        <BenefitItem
          svg={cashbackLogo}
          title={EBenefits.cashbackTitle}
          description={EBenefits.cashbackDescription}
        />
        <BenefitItem
          svg={ratingLogo}
          title={EBenefits.ratingTitle}
          description={EBenefits.ratingDescription}
        />
        <BenefitItem
          svg={customerServiceLogo}
          title={EBenefits.customerServiceTitle}
          description={EBenefits.customerServiceDescription}
        />
      </div>
    </div>
  );
};

export default Benefits;
