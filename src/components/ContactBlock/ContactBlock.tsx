import React from "react";
import InputField from "../InputField/InputField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TOrderFormData } from "../../helpers/types";
import { EContactBlock } from "../../helpers/constants";
import "./ContactBlock.scss";

interface IContactBlockProps {
  register: UseFormRegister<TOrderFormData>;
  errors: FieldErrors<TOrderFormData>;
}

const ContactBlock: React.FC<IContactBlockProps> = ({ register, errors }) => {
  return (
    <div className="contact-block">
      <h1 className="block-title">{EContactBlock.title}</h1>
      <InputField
        register={register}
        errors={errors}
        fieldName="email"
        type="text"
        placeholder={EContactBlock.emailPlaceholder}
      />
    </div>
  );
};

export default ContactBlock;
