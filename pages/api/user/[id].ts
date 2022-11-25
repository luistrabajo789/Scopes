import users from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";

const handlerUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const { method } = req;
  const { id } = req.query;

  method !== "PUT" && res.json({ message: "Metodo no disponible" });
  !session && res.status(401).json({ message: 'Se requiere authentificacion' });

  await db.connect();
  const user = await users.findById(id);
  if (user) {
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    await user.save();
    await db.disconnect();
    res.json({ message: "Perfil Actualizado" });
  } else {
    await db.disconnect();
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

export default handlerUpdate;
