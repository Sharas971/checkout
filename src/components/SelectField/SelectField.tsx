import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TOrderFormData, TField } from "../../helpers/types";
import arrowDown from "../../resources/images/arrow-down.svg";
import "./SelectField.scss";

interface ISelectFieldProps<T> {
  register: UseFormRegister<TOrderFormData>;
  errors: FieldErrors<TOrderFormData>;
  fieldName: TField;
  onChange: (value: T) => void;
  options: T[];
  selectedValue: string;
  placeholder: string;
}

const SelectField = <T extends { name: string; isoCode: string }>({
  register,
  errors,
  fieldName,
  onChange,
  options,
  selectedValue,
  placeholder,
}: ISelectFieldProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options.find(
      (option) => option.name === e.target.value
    );

    if (selectedValue) {
      onChange(selectedValue);
    }
  };
  return (
    <div className="select-wrapper">
      <select
        id={fieldName}
        {...register(fieldName)}
        className={`select ${selectedValue ? "selected" : ""}`}
        onChange={handleChange}
        value={selectedValue}
        autoComplete="none"
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options?.map((el) => (
          <option key={el?.isoCode} value={el?.name}>
            {el?.name}
          </option>
        ))}
      </select>
      {selectedValue && (
        <div className="selected-content">
          <div className="placeholder">{placeholder}</div>
          <div className="selected-value">{selectedValue}</div>
        </div>
      )}
      <span className="arrow">
        <img src={arrowDown} alt="expand" />
      </span>
      {errors?.[fieldName] && (
        <p className="error-text">{`${errors?.[fieldName]?.message}`}</p>
      )}
    </div>
  );
};

export default SelectField;
