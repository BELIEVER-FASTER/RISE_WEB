import type { NextApiRequest, NextApiResponse } from 'next';
import Contact from 'models/Contact';
import dbConnect from 'utils/middlewares/dbConnect';
import { transporter } from 'utils/middlewares/mailer';
import { makeContactMail } from 'utils/middlewares/makeMail';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req;

  let toEmailAddress = 'yhg0337@gmail.com';
  if (process.env.NODE_ENV === 'development') {
    toEmailAddress = 'yhg0337@gmail.com';
  } else {
    toEmailAddress = 'official@believer.kr';
  }

  await dbConnect();

  switch (method) {
    case 'GET':
      res.status(404).json({ code: 404, reason: 'Unhandled route call' });
      break;

    case 'POST':
      try {
        const result = await Contact.create(req.body);

        await transporter.sendMail({
          from: `"RiSE" <${process.env.NODEMAILER_USER}>`,
          to: toEmailAddress,
          subject: 'RiSE Contact 발생',
          text: 'RiSE 문의 사항',
          html: makeContactMail(result.id as string, req.body),
        });

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
