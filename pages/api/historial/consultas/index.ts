import consultas from "models/Consultas";

import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";



const getConsultas = async (req:NextApiRequest, res:NextApiResponse)=>{
    const session = await getSession({req})
    !session?.user && res.json({message:'Se requiere autentificacion'})    
    db.connect()
    const data = await consultas.find({})
    res.status(200).json(data)

}

export default getConsultas