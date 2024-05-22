import {
  handleCardNumberChange,
  handleExpirationDateChange,
  handleSecurityCodeChange,
} from "../helpers/helpers";

describe("Example handleCardNumberChange test", () => {
  it("Formats card number correctly", () => {
    const unformattedCardNumber = "1234123412341234";

    const formattedCardNumber = handleCardNumberChange(unformattedCardNumber);
    const expectedCardNumber = "1234 1234 1234 1234";

    expect(formattedCardNumber).toEqual(expectedCardNumber);
  });
});

describe("Example handleCardNumberChange test 2", () => {
  it("Formats card number correctly", () => {
    const unformattedCardNumber = "1234123412341";

    const formattedCardNumber = handleCardNumberChange(unformattedCardNumber);
    const expectedCardNumber = "1234 1234 1234 1";

    expect(formattedCardNumber).toEqual(expectedCardNumber);
  });
});

describe("Example handleExpirationDateChange test", () => {
  it("Formats expiration date correctly", () => {
    const unformattedExpiration = "1225";

    const formattedExpiration = handleExpirationDateChange(
      unformattedExpiration
    );
    const expectedExpirationr = "12/25";

    expect(formattedExpiration).toEqual(expectedExpirationr);
  });
});

describe("Example handleSecurityCodeChange test", () => {
  it("Trims security code correctly", () => {
    const untrimmedValue = "56845465";

    const trimmedValue = handleSecurityCodeChange(untrimmedValue);
    const expectedSecurityCode = "568";

    expect(trimmedValue).toEqual(expectedSecurityCode);
  });
});
