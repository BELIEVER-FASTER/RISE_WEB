import axios from 'axios';

axios.defaults.withCredentials = true;

export type EmailNotiRes = {
  id: number;
};

type ContactData = {
  company: string;
  tel: string;
  name: string;
  email: string;
  info: string;
};
export const sendContact = async (data: ContactData): Promise<EmailNotiRes> => {
  const res = await axios.post<EmailNotiRes>('/api/contact', data);
  return res.data;
};

export const updateInflow = async (data: {
  id: string;
  inflow: string;
}): Promise<boolean> => {
  const res = await axios.patch<boolean>(`/api/contact/inflow/${data.id}`, {
    inflow: data.inflow,
  });
  return res.data;
};
