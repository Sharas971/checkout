export enum EValidationErrors {
  required = "This field is required",
  numberRequired = "This field must be a number",
  invalidEmail = "Invalid email format",
  unsupportedType = "Unsupported field type",
  expirationFormat = "Expiration date must be MM/YY format",
  securityLength = "Security code must be 3 characters long",
  cardNumberLength = "Card number must be 16 characters long",
}

export enum EBenefits {
  title = "Why Choose LogoIpsum",
  cashbackTitle = "90-Day Money Back Guarantee",
  cashbackDescription = "We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.",
  ratingTitle = "Over 75,000+ Happy Customer",
  ratingDescription = "Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.",
  customerServiceTitle = "Professional Customer Support",
  customerServiceDescription = "Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.",
}

export enum EContactBlock {
  title = "Contact",
  emailPlaceholder = "Email Address",
}

export enum EDeliveryBlock {
  title = "Delivery",
  firstNamePlaceholder = "First Name",
  lastNamePlaceholder = "Last Name",
  addressPlaceholder = "Address",
  cityPlaceholder = "City",
  statePlaceholder = "State / Province",
  postalCodePlaceholder = "ZIP / Postal Code",
  countryPlaceholder = "Country",
}

export enum EPaymentBlock {
  title = "Payment",
  encrypted = "All transactions are secure and encrypted.",
  creditCard = "Credit Card",
  numberPlaceholder = "Card number",
  expirationPlaceholder = "Expiration (MM/YY)",
  securityPlaceholder = "Security code",
  namePlaceholder = "Name on card",
  submit = "COMPLETE ORDER",
}

export enum EForm {
  submit = "COMPLETE ORDER",
  encrypted = "All transactions are secure and encrypted",
}

export enum EProductPrice {
  overview = "Order overview",
  subtotal = "Subtotal",
  total = "Total",
}
