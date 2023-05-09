import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method) {
            case 'GET':
                // await 
                break;
            case 'POST':
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
            default:
                res.status(404).end();
                break;
        }

      // res.json(posts);
    } catch (e) {
      res.status(404).send("This page does not exist")
    }
  };

