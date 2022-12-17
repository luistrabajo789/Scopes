import Solicitudes from "models/Solicitudes";
import Usuarios from "models/Usuarios";

import { NextApiRequest, NextApiResponse } from "next";
import data from "utils/data";

import db from "utils/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect();
    await Usuarios.deleteMany();
    await Usuarios.insertMany(data.users);
    await Solicitudes.deleteMany();
    await Solicitudes.insertMany(data.dataSolicitud);
    await db.disconnect();
    res.json({ message: "Datos creados con exito" });
  } catch (err) {
    res.json({message: err})
  }
};

export default handler;
