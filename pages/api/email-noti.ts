import type { NextApiRequest, NextApiResponse } from 'next';
import Noti from 'models/Noti';
import dbConnect from 'utils/middlewares/dbConnect';
import { makeNotiMail2 } from 'utils/middlewares/makeMail';
import { transporter } from 'utils/middlewares/mailer';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req;

  let toEmailAddress = 'yhg0337@gmail.com';
  if (process.env.NODE_ENV === 'development') {
    toEmailAddress = 'yhg0337@gmail.com';
  } else {
    toEmailAddress = 'official@believer.kr,yhg0337@gmail.com';
  }

  await dbConnect();

  switch (method) {
    case 'GET':
      res.status(404).json({ code: 404, reason: 'Unhandled route call' });
      break;

    case 'POST':
      try {
        if (!req.body.email) return res.status(404).send('Please enter your Email');

        const result = await Noti.create(req.body);
        const amount = await Noti.find({});

        await transporter.sendMail({
          from: `"RiSE" <${process.env.NODEMAILER_USER}>`,
          to: toEmailAddress,
          subject: 'RiSE 이메일 등록 알림',
          text: '이메일 등록',
          html: makeNotiMail2(req.body.email),
        });

        res.status(201).json({ result, amount: amount.length });
      } catch (e) {
        console.error(e);
        res.status(400).send(e);
      }
      break;

    default:
      break;
  }
};

export default handler;
