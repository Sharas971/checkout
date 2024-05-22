import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Country, State, ICountry, IState } from "country-state-city";
import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import { TOrderFormData } from "../../helpers/types";
import { EDeliveryBlock } from "../../helpers/constants";
import "./DeliveryBlock.scss";

interface IDeliveryBlockProps {
  register: UseFormRegister<TOrderFormData>;
  errors: FieldErrors<TOrderFormData>;
  selectedCountry: ICountry | null;
  selectedState: IState | null;
  handleCountryChange: (value: ICountry) => void;
  handleStateChange: (value: IState) => void;
}

const DeliveryBlock: React.FC<IDeliveryBlockProps> = ({
  register,
  errors,
  selectedCountry,
  selectedState,
  handleCountryChange,
  handleStateChange,
}) => {
  return (
    <div className="delivery-block">
      <h1 className="block-title">{EDeliveryBlock.title}</h1>
      <div className="delivery-grid">
        <div className="grid-first-name">
          <InputField
            register={register}
            errors={errors}
            fieldName="firstName"
            type="text"
            placeholder={EDeliveryBlock.firstNamePlaceholder}
          />
        </div>
        <div className="grid-last-name">
          <InputField
            register={register}
            errors={errors}
            fieldName="lastName"
            type="text"
            placeholder={EDeliveryBlock.lastNamePlaceholder}
          />
        </div>

        <div className="grid-address">
          <InputField
            register={register}
            errors={errors}
            fieldName="address"
            type="text"
            placeholder={EDeliveryBlock.addressPlaceholder}
          />
        </div>
        <div className="grid-city">
          <InputField
            register={register}
            errors={errors}
            fieldName="city"
            type="text"
            placeholder={EDeliveryBlock.cityPlaceholder}
          />
        </div>
        <div className="grid-state">
          <SelectField
            register={register}
            errors={errors}
            fieldName="state"
            options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
            onChange={handleStateChange}
            selectedValue={selectedState ? selectedState.name : ""}
            placeholder={EDeliveryBlock.statePlaceholder}
          />
        </div>
        <div className="grid-postal-code">
          <InputField
            register={register}
            errors={errors}
            fieldName="postalCode"
            type="number"
            placeholder={EDeliveryBlock.postalCodePlaceholder}
          />
        </div>
        <div className="grid-country">
          <SelectField
            register={register}
            errors={errors}
            fieldName="country"
            options={Country.getAllCountries()}
            onChange={handleCountryChange}
            selectedValue={selectedCountry ? selectedCountry.name : ""}
            placeholder={EDeliveryBlock.countryPlaceholder}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryBlock;
