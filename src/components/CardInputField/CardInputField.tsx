import React from "react";
import {
  FieldErrors,
  UseFormSetValue,
  Control,
  Controller,
} from "react-hook-form";
import { TOrderFormData, TField } from "../../helpers/types";
import {
  handleSecurityCodeChange,
  handleExpirationDateChange,
  handleCardNumberChange,
} from "../../helpers/helpers";
import "./CardInputField.scss";

interface ICardInputFieldProps {
  errors: FieldErrors<TOrderFormData>;
  fieldName: TField;
  setValue: UseFormSetValue<TOrderFormData>;
  control: Control<TOrderFormData>;
  placeholder: string;
}

const CardInputField: React.FC<ICardInputFieldProps> = ({
  errors,
  fieldName,
  setValue,
  control,
  placeholder,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (fieldName === "expiration") {
      if (e.key === "Backspace") {
        const { value } = e.currentTarget;
        if (value.endsWith("/")) {
          setValue("expiration", value.slice(0, -1));
        }
      }
    }
  };

  const handleChange = (value: string) => {
    if (fieldName === "securityCode") {
      return handleSecurityCodeChange(value);
    } else if (fieldName === "expiration") {
      return handleExpirationDateChange(value);
    } else if (fieldName === "cardNumber") {
      return handleCardNumberChange(value);
    } else {
      return value;
    }
  };

  return (
    <>
      <div className="card-input-container">
        <Controller
          name={fieldName}
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              onChange={(e) => onChange(handleChange(e.target.value))}
              onBlur={onBlur}
              value={value}
              ref={ref}
              placeholder={placeholder}
              className="input"
              onKeyDown={handleKeyDown}
            />
          )}
        />
      </div>
      {errors?.[fieldName] && (
        <p className="error-text">{`${errors?.[fieldName]?.message}`}</p>
      )}
    </>
  );
};

export default CardInputField;
