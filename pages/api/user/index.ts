import bcryptjs from "bcryptjs";
import Usuarios from "models/Usuarios";
import { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "next-auth/react";
import generateP from "utils/autoPassword";
import db from "utils/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const session = await getSession({ req });
  console.log("log metodo: " + method, "y este es el body " + req.body);

  //trae los datos del usuario de la base de datos
  if (method === "GET") {
    await db.connect();
    const userData = await Usuarios.findOne({ email: session?.user?.email! });
    if (userData === null) {
      const autoPassword = generateP();
      const registerUser = await new Usuarios({
        name: session?.user?.name,
        email: session?.user?.email,
        password: bcryptjs.hashSync(autoPassword),
      });
      registerUser.save();
    }

    console.log("LOG del user data: " + userData);
    !session?.user &&
      res.status(401).json({ message: "Se requiere authentificacion" });

    session?.user && userData !== null && res.json(userData);
    await db.connect();
  } else if (method === "POST") {
    await db.connect();
    const newUser = new Usuarios({
      name: req.body.name,
      phone: req.body.phone,
      password: bcryptjs.hashSync(req.body.password),
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      complete: req.body.complete,
      state: req.body.state,
    });

    const user = await newUser.save();
    console.log(user);

    await db.disconnect();
    res.status(201).send({ message: "OK", user });
  }
};
export default handler;
