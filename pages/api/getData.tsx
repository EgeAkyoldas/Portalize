import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { database } = req.query;
    const client = await clientPromise;
    const db = client.db("agents");

    const posts = await db.collection("comments").find({}).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
  }
};