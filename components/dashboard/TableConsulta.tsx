import { type } from "os";
import React, { useEffect, useState } from "react";
import axios from "axios";

// interface TableConsulta {
//   _id: string;
//   equipo: string;
//   tipoConsulta: string;
//   motivo: string;
//   createdAt: string | number;
// }

export default function TableConsulta() {
  const [dataHistorialConsultas, setdataHistorialConsultas] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/api/historial/consultas")
        .then((res) => {
          console.log(res);
          setdataHistorialConsultas(res.data.solicitudes);
        });
    })();
  }, []);

  return (
    <div className="overflow-x-auto w-full rounded-md shadow-md">
      <table className="w-full text-xs">
        <thead className="rounded-t-lg bg-gray-300">
          <tr className="text-right">
            <th title="ID" className="p-3 text-left">
              #
            </th>
            <th title="Motivo" className="p-3 text-left">
              Equipo
            </th>
            <th title="Motivo Consulta" className="p-3">
              Motivo Consulta
            </th>
            <th title="Costo Consulta" className="p-3">
              Costo Consulta
            </th>

            <th title="fecha Cita" className="p-3">
              Costo Consulta
            </th>
            <th title="Proceso Factura" className="p-3">
              Proceso Factura
            </th>
          </tr>
        </thead>
        <tbody>
          {dataHistorialConsultas.map((consulta:any) => (
            <tr
              key={consulta._id}
              className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100"
            >
              <td className="px-3 py-2 text-left">{consulta._id} </td>
              <td className="px-3 py-2 text-left">{consulta.equipo} </td>
              <td className="px-3 py-2">{consulta.motivo}</td>
              <td className="px-3 py-2">${consulta.costoConsulta}</td>
              <td className="px-3 py-2">{consulta.fechaAgendamiento}</td>
              <td className="px-3 py-2">{consulta.validado===false ?'Comprobando Validacion': 'Validado!'}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
