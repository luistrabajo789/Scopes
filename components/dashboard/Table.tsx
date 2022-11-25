import { type } from "os";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Consulta {
  _id: string;
  motivo: string;
  procedimiento: string;
  precio: string;
  fecha: string;
}

export default function Table() {
  const [dataHistorialConsultas, setdataHistorialConsultas] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/api/historial/consultas")
        .then((res) => {
          console.log(res);          
          setdataHistorialConsultas(res.data);
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
              Motivo
            </th>
            <th title="Procedimiento" className="p-3">
              Procedimiento
            </th>
            <th title="Precio" className="p-3">
              Precio
            </th>
            <th title="Losses" className="p-3">
              fecha
            </th>
          </tr>
        </thead>
        <tbody>
          {dataHistorialConsultas.map((consulta: Consulta) => (
            <tr
              key={consulta._id}
              className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100"
            >
              <td className="px-3 py-2 text-left">{consulta._id} </td>
              <td className="px-3 py-2 text-left">{consulta.motivo} </td>
              <td className="px-3 py-2">{consulta.procedimiento}</td>
              <td className="px-3 py-2">{consulta.precio}</td>
              <td className="px-3 py-2">{consulta.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
