import { type } from "os";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Link from "next/link";

// interface TableConsulta {
//   _id: string;
//   equipo: string;
//   tipoConsulta: string;
//   motivo: string;
//   createdAt: string | number;
// }

export default function TableConsulta() {
  const [dataHistorialConsultas, setdataHistorialConsultas] = useState([]);
  const [horaFormateada, setHoraFormateada] = useState("");




  useEffect(() => {
    (async () => {
      moment.locale("es");
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
  
      await axios
        .get(`${domain}/api/historial/consultas`)
        .then((res) => {
 
          setdataHistorialConsultas(res.data.solicitudes);
          setHoraFormateada(moment(res.data.solicitudes.createdAt).format("MMMM D, YYYY h:mm A"));
        });
    })();
  }, []);

  return (
    <div className="overflow-x-auto w-full rounded-md shadow-md">
      <table className="w-full text-xs">
        <thead className="rounded-t-lg bg-stone-700 ">
          <tr className="text-center text-white">
            <th title="ID" className="p-3 border ">
              #
            </th>
            <th title="Motivo" className="p-3 border">
              
            </th>
            <th title="Motivo Consulta" className="p-3 border">
              Motivo Consulta
            </th>
            <th title="fecha Cita" className="p-3 border">
              fecha Cita
            </th>
            <th title="Costo Consulta" className="p-3 border">
              Costo Consulta
            </th>

            <th title="Proceso Factura" className="p-3 border">
              Proceso Factura
            </th>
          </tr>
        </thead>
        <tbody>
          {dataHistorialConsultas.map((consulta: any, index) => (
            <tr
              key={consulta._id}
              className="border-b border-opacity-20 border-gray-300 bg-gray-100 text-center"
            >
              <td className="px-3 py-2 ">{index+1} </td>
              <td className="px-3 py-2 ">{consulta.equipo} </td>
              <td className="px-3 py-2 ">{consulta.motivo}</td>
              <td className="px-3 py-2">{horaFormateada}</td>
              <td className="px-3 py-2 text-green-800">$ {consulta.costoConsulta}</td>
              <td className="px-3 py-2">
                {consulta.validado === false
                  ? <Link href='/dashboard/agendar/metodo' className="text-red-500 font-semibold">Comprobando Validacion...</Link>
                  : <span className="text-green-800 font-semibold">Validado!</span>}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
