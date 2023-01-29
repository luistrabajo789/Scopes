import React, { useEffect, useState } from "react";

const minimoConsuta = [
  "El equipo enciende, pero no da imagen (Monitor - pantalla)",
  "Problemas con la conexión a Internet o la red",
  "No aparecen los programas que usualmente uso",
  "Windows esta desactivado",
  "Office esta desactivado (Word, Excel, PowerPoint e.t.c.)",
  "Quiero instalar un programa, aplicacion o juego",
];
const medioConsulta = [
  "Actualizar un programa, controlador o Windows ",
  "El equipo va lento",
  "Quiero poner seguridad a mi Equipo",
  "Quiero bloquear ciertas paginas del navegador o ciertas aplicaciones",
  "El equipo tiene muchos anuncios de publicidad",
  "Las USB que ingreso pierden la información o aparecen accesos directos",
  "Otro",
];
const altaConsulta = ["Neceito ayuda para respaldar mis datos"];


// "El equipo se apaga solo después de un rato o inmediatamente después de encenderlo",

// "El equipo entra a un menú extraño (BIOS)",

export default function PreviewForm({ dataForm, setDataForm }: any) {
  const [tiempoEstimado, setTiempoEstimado] = useState("");

  useEffect(() => {
    if (minimoConsuta.includes(dataForm.problem)) {
      // setCosto(15000)
      setDataForm({
        ...dataForm,
        costoConsulta: "15000",
      });
      setTiempoEstimado("- 01:00 hora");
    } else if (medioConsulta.includes(dataForm.problem)) {
      setDataForm({
        ...dataForm,
        costoConsulta: "25000",
      });
      setTiempoEstimado("Aprox. 01:00 hora");
    } else {
      setDataForm({
        ...dataForm,
        costoConsulta: "0",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataForm.problem]);

  return (
    <div className="px-3 pt-5 flex flex-col gap-2 bg-white">
      {/*Row Name and phone*/}
      <div className="grid grid-cols-12 border-b mb-3 border-gray-300  ">
        <div className="col-span-12 md:col-span-7   flex gap-2">
          <span className="font-semibold mb-3">Cliente: </span>
          <p className="text-green-800">{dataForm.nombre}</p>
        </div>
        <div className="col-span-12 md:col-span-5   flex gap-2">
          <span className="font-semibold ">Numero de contacto: </span>
          <p className="text-green-800 ">{dataForm.phone}</p>
        </div>
      </div>

      {/*Row Motivo de Consulta and O.S*/}
      <div className="grid grid-cols-12 border-b mb-3 border-gray-300 ">
        <div
          className={
            dataForm.motivoConsulta === "Soporte remoto para un solo equipo" ||
            dataForm.motivoConsulta === "Soporte remoto para varios equipos"
              ? "col-span-12 md:col-span-8 flex flex-wrap gap-2"
              : "col-span-12 md:col-span-12  flex flex-wrap gap-2"
          }
        >
          <span className="font-semibold">Motivo de Consulta: </span>
          <p className="mb-4">{dataForm.motivoConsulta}</p>
        </div>
        {dataForm.motivoConsulta === "Soporte remoto para un solo equipo" ? (
          <div className="col-span-12 md:col-span-4  flex gap-2">
            <span className="font-semibold">S.O: </span>
            <p className=" ">{dataForm.os}</p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/*Row Cantidad*/}
      {dataForm.motivoConsulta === "Soporte remoto para varios equipos" ||
      dataForm.motivoConsulta === "Mantenimientos y reparacion de equipos para empresas o instituciones" ? (
        <div className="col-span-12 border-b flex gap-3 mb-3 ">
          <span className="font-semibold">Cantidad Equipos: </span>
          <p className=" ">{dataForm.cantidad}</p>
        </div>
      ) : (
        ""
      )}

      {/*Row Problem*/}
      {dataForm.motivoConsulta === "Soporte remoto para un solo equipo" ||
      dataForm.motivoConsulta === "Soporte remoto para varios equipos" ? (
        <div className="col-span-12 border-b flex flex-wrap gap-3 mb-3 ">
          <span className="font-semibold">Posible Problema: </span>
          <p className=" ">{dataForm.problem}</p>
        </div>
      ) : (
        ""
      )}

      {/*TRow tiempo de Agedamiento*/}
      <div className="grid grid-cols-12 border-b gap-3 mb-3">
        <div className="col-span-12  lg:col-span-8 flex flex-wrap  gap-1">
          {" "}
          <p className="font-semibold">Tipo de Agedamiento: </p>
          <p
            className={
              dataForm.tipoAgendamiento === "Consulta programada"
                ? "text-slate-800 "
                : "text-red-600 "
            }
          >
            {dataForm.tipoAgendamiento}
          </p>
        </div>
        {dataForm.fechaAgendamiento === "" ||
      dataForm.tipoAgendamiento === "Consulta de emergencia" ||
      dataForm.tipoAgendamiento === "" ? (
        ""
      ) : (
        <div className="col-span-12  lg:col-span-4 border-b flex gap-3 mb-3">
          <p className="text-blue-800">{dataForm.fechaAgendamiento}</p>
        </div>
      )}
      </div>

      {dataForm.motivoConsulta === "Soporte remoto para un solo equipo" ||
      dataForm.motivoConsulta === "Soporte remoto para varios equipos" ? (
        <div className="grid grid-cols-12 ">
          <div className="col-span-7 border-b flex flex-wrap  gap-3 mb-3">
            <span className="font-semibold">Costo estimado:</span>
            <p className=" text-green-800">
              ${dataForm.costoConsulta}  
              {dataForm.tipoAgendamiento === "Consulta de emergencia" &&
                dataForm.problem !== "Otro" && (
                  <span className="text-red-500">+ $25.000 x Hora</span>
                )}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 border-b flex gap-3 mb-3">
            <span className="font-semibold">Estimado: </span>
            <p className=" ">{tiempoEstimado}</p>
          </div>
        </div>
      ):''}

      {/*Row Informacion adicional*/}
      <div className="col-span-12  flex flex-col gap-1 mb-1">
        <span className="font-semibold">Informacion adiconal:</span>
        <textarea
          className="border-2 rounded-md p-2 outline-gray-300"
          rows={5}
          placeholder="Ingrese el mensaje y los detalles de su consulta"
          onChange={(e) =>
            setDataForm({
              ...dataForm,
              aditional: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
