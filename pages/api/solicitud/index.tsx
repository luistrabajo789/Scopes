
import solicitud from "models/solicitud"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import db from "utils/db"



const handler = async(req:NextApiRequest, res:NextApiResponse)=>{
    const {method} = req
    const session = await getSession({req})

    !session && res.json({message:"Se requiere autentifacion"})

    if (method ==='POST') {
        await db.connect()
        const newSolicitud = new solicitud({
            name: req.body.name,
            phone: req.body.phone,
            tipoConsulta: req.body.consulta,
            so: req.body.os,
            equipo: req.body.type,
            motivo:req.body.problem,
            aditional: req.body.aditional,
        })

    const solicitudok = await newSolicitud.save()
    console.log(solicitudok);
    await db.disconnect()
    res.status(201).send({message:"OK", solicitudok})
            
    }

}
export default handler