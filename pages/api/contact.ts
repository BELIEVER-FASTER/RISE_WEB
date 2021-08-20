import type { NextApiRequest, NextApiResponse } from 'next';
import Contact from 'models/Contact';
import dbConnect from 'utils/middlewares/dbConnect';

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

        res.status(201).json(result);
      } catch (e) {
        console.error(e);
        res.status(400).send('상품등록 실패');
      }
      break;

    default:
      break;
  }
};

export default handler;
