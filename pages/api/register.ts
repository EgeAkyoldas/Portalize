import clientPromise from "./database/connect";

export default async (req, res) => {
   try {

    const { name, email, password } = (await req.json()) as {
        name: string;
        email: string;
        password: string;
      };

       const client = await clientPromise;
       const db = client.db();

       const movies = await db
           .collection("users")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};
