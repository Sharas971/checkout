import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TOrderFormData, TField } from "../../helpers/types";
import "./InputField.scss";

interface IInputFieldProps {
  register: UseFormRegister<TOrderFormData>;
  errors: FieldErrors<TOrderFormData>;
  fieldName: TField;
  type: string;
  placeholder: string;
}

const InputField: React.FC<IInputFieldProps> = ({
  register,
  errors,
  fieldName,
  type,
  placeholder,
}) => {
  return (
    <>
      <div className="input-container">
        <input
          {...register(fieldName, {
            valueAsNumber: type === "number",
          })}
          type={type}
          placeholder={placeholder}
          className="input"
        />
      </div>
      {errors?.[fieldName] && (
        <p className="error-text">{`${errors?.[fieldName]?.message}`}</p>
      )}
    </>
  );
};

export default InputField;
