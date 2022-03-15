export interface JobInterface {
  id: string;
  title: string;
  name: string;
  phoneNumber: string;
  email: string;
  number: string | null;
  street: string;
  city: string;
  zipCode: number | null;
  completed: boolean;
  description: string;
  price: number | null;
  time: string;
}
