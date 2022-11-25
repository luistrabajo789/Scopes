import users from "models/User";
import bcryptjs from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";
var bodyParser = require("body-parser");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method} = req;
  const session = await getSession({ req });
  console.log(method, req.body);
  

  if (method === "GET") {
    await db.connect();
    const userData = await users.findOne({ email: session?.user?.email! });
    console.log(userData);
    !session?.user &&
      res.status(401).json({ message: "Se requiere authentificacion" });
    userData === null && res.status(401).json({ message: "not register" });
    session?.user && userData !== null && res.json(userData);
    await db.connect();
  }
  else if (method === "POST") {
    await db.connect();
    const newUser = new users({
      name: req.body.name,
      phone: req.body.phone,
      password: bcryptjs.hashSync(req.body.password),
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
    });

    const user = await newUser.save();
    console.log(user);
    
    await db.disconnect();
    res.status(201).send({ message: "OK", user });
  }
};
export default handler;
