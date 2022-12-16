import { type } from "os";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface TableConsulta {
  _id: string;
  equipo: string;
  tipoConsulta: string;
  motivo: string;
  createdAt: string | number;
}

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
            <th title="Procedimiento" className="p-3">
              Tipo Consulta
            </th>
            <th title="Precio" className="p-3">
              Motivo Consulta
            </th>
            <th title="Losses" className="p-3">
              Fecha Solicitud
            </th>
          </tr>
        </thead>
        <tbody>
          {dataHistorialConsultas.map((consulta: TableConsulta) => (
            <tr
              key={consulta._id}
              className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100"
            >
              <td className="px-3 py-2 text-left">{consulta._id} </td>
              <td className="px-3 py-2 text-left">{consulta.equipo} </td>
              <td className="px-3 py-2">{consulta.tipoConsulta}</td>
              <td className="px-3 py-2">{consulta.motivo}</td>
              <td className="px-3 py-2">{(()=>{
                const date = new Date(consulta.createdAt)
                return date.toLocaleDateString('en-US')
              })()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
