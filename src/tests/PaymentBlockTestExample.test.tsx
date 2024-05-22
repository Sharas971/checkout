import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import DynamicForm from "../components/DynamicForm/DynamicForm";
// import PaymentBlock from "../components/PaymentBlock/PaymentBlock";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { EPaymentBlock, EValidationErrors } from "../helpers/constants";

test("renders CheckoutForm component and checks PaymentBlock fields", () => {
  render(<CheckoutForm />);

  expect(screen.getByText(EPaymentBlock.title)).toBeInTheDocument();
  expect(screen.getByText(EPaymentBlock.encrypted)).toBeInTheDocument();
  expect(screen.getByText(EPaymentBlock.creditCard)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(EPaymentBlock.numberPlaceholder)
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(EPaymentBlock.expirationPlaceholder)
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(EPaymentBlock.securityPlaceholder)
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(EPaymentBlock.namePlaceholder)
  ).toBeInTheDocument();
});

test("validate CheckoutForm submit, empty", async () => {
  render(<CheckoutForm />);

  fireEvent.click(screen.getByText(EPaymentBlock.submit));

  await (() =>
    expect(screen.getByText(EValidationErrors.required)).toBeInTheDocument());
});

test("validate DynamicForm submit, filled card number incorrectly", async () => {
  render(<CheckoutForm />);
  userEvent.type(screen.getByPlaceholderText("Card number"), "11111");
  fireEvent.click(screen.getByText(EPaymentBlock.submit));

  await (() =>
    expect(
      screen.getByText(EValidationErrors.cardNumberLength)
    ).toBeInTheDocument());
});
