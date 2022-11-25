import consultas from "models/Consultas";
import users from "models/User";
import User from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import productos from "pages/productos";
import data from "utils/data";
import { dataConsultas } from "utils/dataHistorialConsultas";
import db from "utils/db";

const handler = async (req:NextApiRequest, res:NextApiResponse)=>{
    
    await db.connect()
    await users.deleteMany()
    await users.insertMany(data.users)
    await consultas.deleteMany()
    await consultas.insertMany(data.historialConsultas)
    await db.disconnect()
    res.send({message: 'Datos creados con exito'})
}

export default handler