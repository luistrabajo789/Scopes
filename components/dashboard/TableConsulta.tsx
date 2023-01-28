import React, { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
import { toastError } from "utils/toast";
import Loader1 from "components/loaders/Loader1";

export default function TableConsulta() {
  const [dataHistorialConsultas, setdataHistorialConsultas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const windowsRoute = window.location.href;
        const url = new URL(windowsRoute);
        const domain = url.origin;
        await axios.get(`${domain}/api/historial/consultas`).then((res) => {
          setdataHistorialConsultas(res.data.solicitudes);
        });
      } catch (error) {
        toastError();
      }
    })();
  }, []);

  return (
    <div className="overflow-x-auto w-full rounded-md shadow-md">
      {dataHistorialConsultas.length === 0 ? (
        <div className="bg-white h-full grid place-content-center text-center">
          <h1 className=" py-5">No tienes consultas</h1>
          <Link  href="/dashboard/agendar/datos" className="py-2 bg-stone-800 text-white rounded-md mb-5 hover:bg-green-800">
            Agendar Una
          </Link>
        <Loader1/>  
        </div>
      ) : (
        <table className="w-full text-xs">
          <thead className="rounded-t-lg bg-stone-600 ">
            <tr className="text-center text-white">
              <th title="ID" className="p-3 border ">
                #
              </th>
              <th title="Motivo Consulta" className="p-3 border">
                Motivo Consulta
              </th>
              <th title="fecha Cita" className="p-3 border">
                Fecha Cita
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
                <td className="px-3 py-2 ">{index + 1} </td>
                     
                <td className="px-3 py-2 ">{consulta.motivo}</td>
                <td className="px-3 py-2">{consulta.fechaAgendamiento.length > 0 ? consulta.fechaAgendamiento
                : <span className="text-red-500">Consulta de Emergencia</span>
                }</td>
                <td className="px-3 py-2 text-green-800">
                  {consulta.costoConsulta.length > 1 && "$"}{" "}
                  {consulta.costoConsulta}
                </td>
                <td className="px-3 py-2">
                  {consulta.validado === false ? (
                    <Link
                      href="/dashboard/agendar/metodo"
                      className="text-red-500 font-semibold"
                    >
                      Sin Validar{" "}
                    </Link>
                  ) : (
                    <span className="text-green-800 font-semibold">
                      Validado!
                    </span>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
