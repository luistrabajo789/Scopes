import Solicitudes from "models/Solicitudes";
import Usuarios from "models/Usuarios";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";

const getConsultas = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  //verifica session
  !session?.user && res.json({ message: "Se requiere autentificacion" });
  
  //conecta y consulta base de datos
  await db.connect();
  const userData = await Usuarios.findOne({ email: session?.user?.email });
  const idmongo = userData._id;
  const id = idmongo.toString();

  const solicitudes = await Solicitudes.find({usuario: id})

  
await db.disconnect();

res.status(200).json({message: "success", solicitudes})

};

export default getConsultas;
