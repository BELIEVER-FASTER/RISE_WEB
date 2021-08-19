import type { NextApiRequest, NextApiResponse } from 'next';
import Noti from 'models/Noti';
import dbConnect from 'utils/dbConnect';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      res.status(404).json({ code: 404, reason: 'Unhandled route call' });
      break;

    case 'POST':
      try {
        if (!req.body.email) return res.status(404).send('이메일을 입력해주세요.');

        const existEmail = await Noti.findOne({ email: req.body.email });
        if (existEmail) return res.status(500).send('이미 등록된 이메일입니다.');

        const result = await Noti.create(req.body);
        res.status(201).json(result);
      } catch (e) {
        console.error(e);
        res.status(400).send('이메일 등록 실패');
      }
      break;

    default:
      break;
  }
};

export default handler;
