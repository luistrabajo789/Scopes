import Solicitudes from "models/Solicitudes";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const session = await getSession({ req });

  !session && res.json({ message: "Se requiere autentifacion" });

  await db.connect();
  if (method === "POST") {
 
    const newSolicitud = new Solicitudes({
      name: req.body.name,
      phone: req.body.phone,
      tipoConsulta: req.body.consulta,
      so: req.body.os,
      equipo: req.body.type,
      motivo: req.body.problem,
      aditional: req.body.aditional,
      usuario: req.query._id,
      tipoAgendamiento: req.query.tipoAgendamiento,
      cantidad: req.body.cantidad,
      costoConsulta: req.body.costoConsulta,
    });

    const solicitudOk = await newSolicitud.save();

    console.log(solicitudOk);
    await db.disconnect();
    res.status(201).send({ message: "OK", solicitudok: solicitudOk });
  }
};
export default handler;