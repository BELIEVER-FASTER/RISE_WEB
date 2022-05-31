import axios from 'axios';
import dayjs from 'dayjs';

axios.defaults.withCredentials = true;
// if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;
// }

export type EmailNotiRes = {
  status: number;
  success: boolean;
  message: string;
};
export const emailNoti = async (email: string): Promise<EmailNotiRes> => {
  const res = await axios.post('/api/email-noti', { email });
  await sendSlackMessage(email, res.data.amount);
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
  await sendSlackContact(data);
  return res.data;
};

export const updateInflow = async (data: {
  _id: string;
  inflow: string;
}): Promise<boolean> => {
  const res = await axios.patch<boolean>('/api/contact', data);
  return res.data;
};
export const sendSlackMessage = async (
  email: string,
  amount: number
): Promise<EmailNotiRes> => {
  const res = await axios.post<EmailNotiRes>(
    process.env.NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_SLACK_WEB_HOOK as string)
      : (process.env.NEXT_PUBLIC_SLACK_TEST_HOOK as string),
    {
      attachments: [
        {
          fallback: 'Required plain-text summary of the attachment.',
          color: '#0090d2',
          pretext: 'RiSE - 출시 알림 등록',
          author_name: '등록하신 분 ▽▽',
          title: email,
          title_link: `mailto:${email}`,
          text: `현재까지 총 ${amount} 명의 유저 등록`,
          footer: 'NOA',
          footer_icon: 'https://i.ibb.co/n1w52dJ/loading-1.gif',
          ts: +new Date(),
        },
      ],
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: false,
    }
  );
  return res.data;
};

export const sendSlackContact = async (data: ContactData): Promise<EmailNotiRes> => {
  const res = await axios.post<EmailNotiRes>(
    process.env.NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_SLACK_WEB_HOOK as string)
      : (process.env.NEXT_PUBLIC_SLACK_TEST_HOOK as string),
    {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `:tada: [${data.company}] 문의가 도착했어요`,
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*담당자:*\n${data.name}`,
            },
            {
              type: 'mrkdwn',
              text: `*이메일:*\n<mailto:${data.email}|${data.email}>`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*문의일자:*\n${dayjs(new Date()).format(
                'YYYY년 MM월 DD일 hh시 mm분'
              )}`,
            },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'context',
          elements: [
            {
              type: 'plain_text',
              text: `내용:\n ${
                data.info.length > 70 ? data.info.substring(0, 70) : data.info
              }`,
              emoji: true,
            },
          ],
        },
      ],
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: false,
    }
  );
  return res.data;
};
