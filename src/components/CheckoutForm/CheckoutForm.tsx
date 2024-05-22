import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICountry, IState } from "country-state-city";
import { TOrderFormData } from "../../helpers/types";
import { orderInfoSchema } from "../../helpers/zodSchemas";
import { EForm } from "../../helpers/constants";
import ContactBlock from "../ContactBlock/ContactBlock";
import DeliveryBlock from "../DeliveryBlock/DeliveryBlock";
import PaymentBlock from "../PaymentBlock/PaymentBlock";
import lockImage from "../../resources/images/lock.svg";
import "./CheckoutForm.scss";

const CheckoutForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TOrderFormData>({
    resolver: zodResolver(orderInfoSchema),
  });

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [selectedState, setSelectedState] = useState<IState | null>(null);

  const handleCountryChange = (value: ICountry) => {
    setSelectedCountry(value);
    setSelectedState(null);
  };
  const handleStateChange = (value: IState) => {
    setSelectedState(value);
  };

  const onSubmit = async (data: TOrderFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Used to imitate an action
    localStorage.setItem("formData", JSON.stringify(data));

    setSelectedState(null);
    setSelectedCountry(null);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <ContactBlock register={register} errors={errors} />
      <div className="mobile-spacer" />
      <DeliveryBlock
        register={register}
        errors={errors}
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        handleCountryChange={handleCountryChange}
        handleStateChange={handleStateChange}
      />
      <div className="mobile-spacer" />
      <PaymentBlock errors={errors} setValue={setValue} control={control} />
      <div className="button-wrapper">
        <button
          disabled={isSubmitting}
          type="submit"
          className="button button-primary"
        >
          {EForm.submit}
        </button>
      </div>
      <div className="encrypred-wrapper">
        <img src={lockImage} alt="lock" className="lock-image" />
        <span className="encrypted-text">{EForm.encrypted}</span>
      </div>
    </form>
  );
};

export default CheckoutForm;
