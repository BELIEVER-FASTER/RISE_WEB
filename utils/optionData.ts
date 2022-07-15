export type Option = {
  id: number;
  name: string;
  label: string;
  price: number;
  tax: number;
};
export const options: Option[] = [
  {
    id: 1,
    name: 'Basic',
    label: '베이직 제작 패키지',
    price: 500000,
    tax: 50000,
  },
  {
    id: 2,
    name: 'Premium',
    label: '프리미엄 제작 패키지',
    price: 2000000,
    tax: 200000,
  },
];
