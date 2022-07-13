import usePaymentForm, { PaymentFormType } from 'hooks/usePaymentForm';
import React, { createContext, useContext } from 'react';

const FormContext = createContext<PaymentFormType | null>(null);
export default function PaymentProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const form = usePaymentForm();
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

export const usePaymentFormContext = (): PaymentFormType => {
  const form = useContext(FormContext);
  if (!form) throw Error('폼 컨택스트 찾을 수 없음.');
  return form;
};
