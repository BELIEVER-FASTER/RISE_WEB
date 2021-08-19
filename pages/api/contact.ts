import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      res.status(404).json({ code: 404, reason: 'Unhandled route call' });
      break;
    case 'POST':
      res.status(404).json({ code: 404, reason: 'Unhandled route call' });
      break;
    default:
      break;
  }
};

export default handler;
