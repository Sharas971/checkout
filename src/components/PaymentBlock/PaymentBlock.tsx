import React from "react";
import CardInputField from "../CardInputField/CardInputField";
import { FieldErrors, UseFormSetValue, Control } from "react-hook-form";
import { TOrderFormData } from "../../helpers/types";
import { EPaymentBlock } from "../../helpers/constants";
import dotImage from "../../resources/images/dotImage.png";
import visaLogo from "../../resources/images/visa-logo.png";
import mastercardLogo from "../../resources/images/mastercard-logo.png";
import amexLogo from "../../resources/images/amex-logo.png";
import dinersLogo from "../../resources/images/diners-club-logo.png";
import moreLogo from "../../resources/images/more-logo.png";
import "./PaymentBlock.scss";

interface IPaymentBlockProps {
  errors: FieldErrors<TOrderFormData>;
  setValue: UseFormSetValue<TOrderFormData>;
  control: Control<TOrderFormData>;
}

const PaymentBlock: React.FC<IPaymentBlockProps> = ({
  errors,
  setValue,
  control,
}) => {
  return (
    <div className="payment-block">
      <h1 className="block-title">{EPaymentBlock.title}</h1>
      <p className="security-text">{EPaymentBlock.encrypted}</p>
      <div className="credit-card-header">
        <div className="left-section">
          <img src={dotImage} alt="cheked dot" className="dot" />
          <label>{EPaymentBlock.creditCard}</label>
        </div>
        <div className="right-section">
          <img src={visaLogo} alt="Visa logo" className="logo" />
          <img src={mastercardLogo} alt="Mastercard logo" className="logo" />
          <img src={amexLogo} alt="Amex logo" className="logo" />
          <img src={dinersLogo} alt="Diners logo" className="logo" />
          <img src={moreLogo} alt="More options" className="logo" />
        </div>
      </div>
      <div className="credit-card">
        <div className="payment-grid">
          <div className="grid-card-number">
            <CardInputField
              errors={errors}
              fieldName="cardNumber"
              setValue={setValue}
              control={control}
              placeholder={EPaymentBlock.numberPlaceholder}
            />
          </div>
          <div className="grid-expiration">
            <CardInputField
              errors={errors}
              fieldName="expiration"
              setValue={setValue}
              control={control}
              placeholder={EPaymentBlock.expirationPlaceholder}
            />
          </div>
          <div className="grid-security-code">
            <CardInputField
              errors={errors}
              fieldName="securityCode"
              setValue={setValue}
              control={control}
              placeholder={EPaymentBlock.securityPlaceholder}
            />
          </div>
          <div className="grid-card-name">
            <CardInputField
              errors={errors}
              fieldName="nameOnCard"
              setValue={setValue}
              control={control}
              placeholder={EPaymentBlock.namePlaceholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBlock;
