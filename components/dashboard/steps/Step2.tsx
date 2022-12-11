/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";

//list problems
const select1 = [
  "Mi equipo va lento o se congela",
  "Mi equipo enciende pero no da imagen",
  "Mi equipo se apaga por ratos",
  "Mi equipo muestra demasiados anuncios",
  "Mi equipo tiene problemas con un programa",
];

export default function Step2() {
  const [formComplete, setFormComplete] = useState(false);
  const [dataForm, setDataForm] = useState({
    nombre: "",
    phone: "",
    type: "",
    problem: "",
    consulta: "",
    os: "",
    aditional: "",
  });

  console.log(dataForm);

  //get data User and Os
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/api/user")
        .then((res) => {
          setDataForm({
            ...dataForm,
            nombre: res.data.name,
            phone: res.data.phone,
            os: navigator.platform,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  const createTicket = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/solicitud", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataForm),
    });
    const resBackend = await res.json();
    console.log(resBackend);
    resBackend.message === "OK" && setFormComplete(true)
  };

  return (
    <div>
      <form
        onSubmit={(e) => createTicket(e)}
        className="grid grid-cols-12 h-52 "
      >
        {/* section selects */}
        <div className="col-span-4 p-3 h-96 bg-white border-r-2 ">
          <select
            required
            className="w-full text-md h-8 mb-3"
            value={dataForm.type}
            onChange={(e) =>
              setDataForm({
                ...dataForm,
                type: e.target.value,
              })
            }
          >
            <option value="">Seleccionar equipo</option>
            <option value="Computador de Mesa">Computador de Mesa</option>
            <option value="Portatil">Portatil</option>
          </select>
          <select
            required
            className="w-full text-md h-8 my-3"
            value={dataForm.consulta}
            onChange={(e) =>
              setDataForm({
                ...dataForm,
                consulta: e.target.value,
              })
            }
          >
            <option value="">Tipo de Consulta</option>
            <option value="Consulta de emergencia">
              Consulta de emergencia
            </option>
            <option value="Consulta programada">Consulta programada</option>
          </select>
          <select
            required
            value={dataForm.problem}
            className="w-full h-8 my-3"
            onChange={(e) =>
              setDataForm({
                ...dataForm,
                problem: e.target.value,
              })
            }
          >
            <option value="">Seleccionar Problema</option>
            {select1.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Preview         */}
        <div className="col-span-8 px-10 pt-5 flex flex-col gap-2  bg-white">
          <div className="grid grid-cols-12 border-b-2 mb-3 border-gray-300  ">
            <div className="col-span-5   flex gap-2">
              <span className="font-medium italic ">Nombre: </span>
              <p className=" italic">{dataForm.nombre}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b-2 mb-3 border-gray-300 ">
            <div className="col-span-5  flex gap-2">
              <span className="font-medium italic ">Equipo: </span>
              <p className="italic ">{dataForm.type}</p>
            </div>
            <div className="col-span-7  flex gap-2">
              <span className="font-medium italic">Sistema Operativo: </span>
              <p className=" italic">{dataForm.os}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-span-12  flex gap-3 mb-1">
              <span className="font-medium italic">Tipo de consulta: </span>
              <p
                className={
                  dataForm.consulta === "Consulta programada"
                    ? "text-primary-100 italic"
                    : "text-red-600 italic"
                }
              >
                {dataForm.consulta}
              </p>
            </div>
            {dataForm.consulta === "Consulta de emergencia" && (
              <div className="col-span-12  flex gap-3 mb-3">
                <p className="text-red-600 text-xs">
                  *Tenga encuenta que las consultas de emergencia tienen un
                  cargo.adicional por ahora
                </p>
              </div>
            )}
            <div className="col-span-12  flex gap-3 mb-3 ">
              <span className="font-medium italic">Motivo Consulta: </span>
              <p className="text-red-600 italic">{dataForm.problem}</p>
            </div>
            {
              <div className="col-span-12  flex gap-3 mb-3">
                <span className="font-medium italic">
                  Tiempo estimado de reparacion:{" "}
                </span>
                <p className=" italic">01:00 horas</p>
              </div>
            }
            <div className="col-span-12  flex flex-col gap-3 mb-3">
              <span className="font-medium italic">Informacion adiconal:</span>
              <textarea
                className="border-2 border-gray-400 rounded-md p-2"
                rows={3}
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
        <div className="bg-white col-span-12 p-3 flex justify-end">
          <button
            className="rounded-md px-7 py-3 bg-primary-100 text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>

      <div className="flex justify-end ">
        {/* It's a conditional rendering. If the form is complete, then the button will be rendered. */}
        {formComplete && (
          <button
            className="rounded-md px-7 py-3 bg-secondary-100 text-white"
            type="button"
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}
