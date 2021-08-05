import axios from 'axios';
// axios.defaults.baseURL = 'https://api.riseenm.com';
axios.defaults.withCredentials = true;

export type EmailNotiRes = {
  status: number;
  success: boolean;
  message: string;
};
export const emailNoti = async (email: string): Promise<EmailNotiRes> => {
  const res = await axios.post<EmailNotiRes>('/landingAPI/landing/register', { email });
  return res.data;
};
