import users from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  
  !session?.user && res.status(401).json({message: 'Se requiere authentificacion'})

    try {
      await db.connect();
      const userData = await users.findOne({ email: session?.user?.email! });
      await db.disconnect;
      return res.json(userData);      
    } catch (error) {
      return res.status(400).json(error);
    }
};
export default handler;
