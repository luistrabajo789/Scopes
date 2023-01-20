/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toastOK } from "utils/toast";


//list problems
const select1 = [
  "Mi equipo va lento o se congela",
  "Mi equipo enciende pero no da imagen",
  "Mi equipo se apaga por ratos",
  "Mi equipo muestra demasiados anuncios",
  "Mi equipo tiene problemas con un programa",
];

export default function Step2() {
  const { push } = useRouter();
  const [formComplete, setFormComplete] = useState(false);
  const [idUser, setidUser] = useState(null);
  const [dataForm, setDataForm] = useState({
    nombre: "",
    phone: "",
    type: "",
    problem: "",
    consulta: "",
    os: "",
    aditional: "",
  });

  // const alertOK = () =>
  //   toast("Solicitud enviada", {
  //     hideProgressBar: true,
  //     autoClose: 3000,
  //     type: "success",
  //     position:'bottom-right'
  //   });

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
          setidUser(res.data._id);
        })
        .catch((error) => {
          console.log(error);
        });
    })();

    if (formComplete === true) {
      toastOK();
      push("/dashboard/agendar/metodo");
    }
  }, [formComplete]);

  const createSolicitud = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/solicitud/${idUser}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataForm),
    });
    const resBackend = await res.json();
    console.log(resBackend);
    resBackend.message === "OK" && setFormComplete(true);
  };

  return (
    <div>
      <form
        onSubmit={(e) => createSolicitud(e)}
        className="grid grid-cols-12 h-52  text-sm text-gray-700 "
      >
        {/* section selects */}

        <div className="col-span-4 p-3 h-96 bg-white border-r-2 ">
        <h3 className="my-5 text-md font-semibold">Seleccione el tipo de computador, el tipo de agendamiento y el error</h3>
          <select
            required
            className="w-full text-md h-8"
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
            className="w-full h-8 "
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
        <div className="col-span-8 px-10 pt-5 flex flex-col gap-2 bg-white">
          <div className="grid grid-cols-12 border-b mb-3 border-gray-300  ">
            <div className="col-span-5   flex gap-2">
              <span className="font-semibold ">Nombre: </span>
              <p className=" ">{dataForm.nombre}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b mb-3 border-gray-300 ">
            <div className="col-span-5  flex gap-2">
              <span className="font-semibold ">Equipo: </span>
              <p className=" ">{dataForm.type}</p>
            </div>
            <div className="col-span-7  flex gap-2">
              <span className="font-semibold">Sistema Operativo: </span>
              <p className=" ">{dataForm.os}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-span-12  flex gap-3 mb-1">
              <span className="font-semibold">Tipo de consulta: </span>
              <p
                className={
                  dataForm.consulta === "Consulta programada"
                    ? "text-primary-100 "
                    : "text-red-600 "
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
              <span className="font-semibold">Motivo consulta: </span>
              <p className=" ">{dataForm.problem}</p>
            </div>
            {
              <div className="col-span-12  flex gap-3 mb-3">
                <span className="font-semibold">
                  Tiempo estimado de reparacion:{" "}
                </span>
                <p className=" ">01:00 horas</p>
              </div>
            }
            <div className="col-span-12  flex flex-col gap-1 mb-1">
              <span className="font-semibold">Informacion adiconal:</span>
              <textarea
                className="border border-gray-400 focus:border-blue-500 rounded-md p-2"
                rows={5}
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
        <div className="bg-white col-span-12 p-5 flex justify-end ">
          <button
            className="rounded-md px-7 py-3 bg-primary-100 text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
