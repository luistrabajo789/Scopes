import React from "react";

export default function PreviewForm({ dataForm, setDataForm }: any) {
  return (
    <div className="px-10 pt-5 flex flex-col gap-2 bg-white">
      {/*Row Name and phone*/}
      <div className="grid grid-cols-12 border-b mb-3 border-gray-300  ">
        <div className="col-span-12 md:col-span-7   flex gap-2">
          <span className="font-semibold ">Nombre: </span>
          <p className=" ">{dataForm.nombre}</p>
        </div>
        <div className="col-span-12 md:col-span-5   flex gap-2">
          <span className="font-semibold ">Numero de contacto: </span>
          <p className=" ">{dataForm.phone}</p>
        </div>
      </div>

      {/*Row Motivo de Consulta and O.S*/}
      <div className="grid grid-cols-12 border-b mb-3 border-gray-300 ">
        <div
          className={
            dataForm.motivoConsulta === "Soporte remoto para un solo equipo" ||
            dataForm.motivoConsulta === "Soporte remoto para varios equipos"
              ? "col-span-12 md:col-span-8 flex gap-2"
              : "col-span-12 md:col-span-12  flex gap-2"
          }
        >
          <span className="font-semibold">Motivo de Consulta: </span>
          <p className=" ">{dataForm.motivoConsulta}</p>
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

      <div className="grid grid-cols-12 ">
        {/*Row Cantidad*/}
        {dataForm.motivoConsulta === "Soporte remoto para varios equipos" ? (
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
          <div className="col-span-12 border-b flex gap-3 mb-3 ">
            <span className="font-semibold">Posible Problema: </span>
            <p className=" ">{dataForm.problem}</p>
          </div>
        ) : (
          ""
        )}

        {/*TRow tiempo de Agedamiento*/}
        <div className="col-span-12 border-b flex gap-3 mb-3">
          <span className="font-semibold">Tipo de Agedamiento: </span>
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

        {dataForm.motivoConsulta === "Consulta de emergencia" && (
          <div className="col-span-12  flex gap-3 mb-3">
            <p className="text-red-600 text-xs">
              *Tenga encuenta que las consultas de emergencia tienen un
              cargo.adicional por ahora
            </p>
          </div>
        )}
        {/*Row tiempo estimado*/}
        <div className="col-span-12 border-b flex gap-3 mb-3">
          <span className="font-semibold">Tiempo estimado de reparacion: </span>
          <p className=" ">01:00 horas</p>
        </div>
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
    </div>
  );
}
