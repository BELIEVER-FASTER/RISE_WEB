import type { NextApiRequest, NextApiResponse } from 'next';
import Contact from 'models/Contact';
import dbConnect from 'utils/middlewares/dbConnect';
import { transporter } from 'utils/middlewares/mailer';
import { contactResultMail, makeContactMail } from 'utils/middlewares/makeMail';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      res.status(404).json({ code: 404, reason: 'Unhandled route call' });
      break;

    case 'POST':
      try {
        const result = await Contact.create(req.body);

        const mailToUs = await transporter.sendMail({
          from: `"RiSE" <${process.env.NODEMAILER_USER}>`,
          to: 'contact@riseenm.com',
          subject: 'RiSE Contact 발생',
          text: 'RiSE 문의 사항',
          html: makeContactMail(result.id as string, req.body),
        });

        const mailToUser = transporter.sendMail({
          from: `"RiSE" <contact@riseenm.com>`,
          to: req.body.email,
          subject: 'RiSE - 문의결과',
          text: '문의가 성공적으로 접수되었습니다.',
          html: contactResultMail(),
        });

        await Promise.allSettled([mailToUs, mailToUser]);

        res.status(201).json(result);
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
