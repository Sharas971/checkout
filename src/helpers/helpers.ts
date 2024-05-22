export const handleCardNumberChange = (value: string) => {
  const formattedValue = value.replace(/\D/g, "").substring(0, 16);
  return formattedValue.replace(/(.{4})/g, "$1 ").trim();
};

export const handleExpirationDateChange = (value: string) => {
  let formattedValue = value.replace(/\D/g, "");

  if (formattedValue.length >= 2) {
    let month = formattedValue.substring(0, 2);
    let year = formattedValue.substring(2, 4);

    if (Number(month) > 12) {
      month = "12";
    }

    formattedValue = `${month}/${year}`;
  }

  return formattedValue;
};

export const handleSecurityCodeChange = (value: string) => {
  return value.replace(/\D/g, "").substring(0, 3);
};
