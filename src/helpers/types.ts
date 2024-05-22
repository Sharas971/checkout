export type TOrderFormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
  cardNumber: string;
  expiration: string;
  securityCode: number;
  nameOnCard: string;
};

export type TField =
  | "email"
  | "firstName"
  | "lastName"
  | "address"
  | "city"
  | "state"
  | "postalCode"
  | "country"
  | "cardNumber"
  | "expiration"
  | "securityCode"
  | "nameOnCard";
