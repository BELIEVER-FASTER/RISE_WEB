import axios from 'axios';

axios.defaults.withCredentials = true;
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;
}

export type EmailNotiRes = {
  status: number;
  success: boolean;
  message: string;
};
export const emailNoti = async (email: string): Promise<EmailNotiRes> => {
  const res = await axios.post<EmailNotiRes>('/api/email-noti', { email });
  return res.data;
};

type ContactData = {
  budget: string;
  schedule: string;
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
