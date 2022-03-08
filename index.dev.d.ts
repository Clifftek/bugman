export interface CustomerInterface {
  name: string;
  phoneNumber: string;
  email: string;
  address: {
    streetAddress: string;
    city: string;
    zipCode: number;
  }
}

export interface JobInterface {
  id: number;
  title: string;
  customer: CustomerInterface;
  completed: boolean;
  description: string;
  price: number;
}