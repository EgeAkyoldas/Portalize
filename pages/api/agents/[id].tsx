import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

interface AgentQuote {
  name: string;
  quote: string;
  src: string;
} 

export const GetAgent = async (name: string | ObjectId) => {
    const client = await clientPromise;
    const db = client.db("agents");

    const data = await db.collection("quotes").findOne({name: (name)});

    return data;
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id!;
    const data =  await GetAgent(id as string);

    res.json(data);
  } catch (e) {
    console.error(e);
  }
};