import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { TyUser } from "./Step1Form";

export default function Step2() {
  const [dataUser, setdataUser] = useState<TyUser>();
  const [formComplete, setFormComplete] = useState(false);
  const [time, setTime] = useState("");
  const [systemOp, setSystemOp] = useState("");
  const [formStep2, setFormStep2] = useState({
    nombre: dataUser?.name,
    type: "",
    problem: "",
    consulta: "",
    fechaSolicitud: time,
    sistemaOperativo: systemOp,
  });
  console.log(systemOp);

  useEffect(() => {
    let os = navigator.userAgent;
    let finalOs = "";
    if (os.search("Windows") !== -1) {
      finalOs = "Windows";
    } else if (os.search("Mac") !== -1) {
      finalOs = "MacOS";
    } else if (os.search("X11") !== -1 && !(os.search("Linux") !== -1)) {
      finalOs = "UNIX";
    } else if (os.search("Linux") !== -1 && os.search("X11") !== -1) {
      finalOs = "Linux";
    }
    setSystemOp(finalOs);
  }, []);

  let today = new Date();
  const now = today.toLocaleString();

  setTimeout(() => setTime(now), 1000);

  const typeSelect = useRef(null);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/api/user")
        .then((res) => {
          setdataUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  const select1 = [
    "Mi equipo va lento o se congela",
    "Mi equipo enciende pero no da imagen",
    "Mi equipo se apaga por ratos",
    "Mi equipo muestra demasiados anuncios",
    "Mi equipo tiene problemas con un programa",
  ];

  return (
    <div>
      <form className="grid grid-cols-12 h-52 ">
        {/* section selects */}
        <div className="col-span-4 p-3 h-96 bg-white border-r-2 ">
          <select
            className="w-full text-md h-8 mb-3"
            value={formStep2.type}
            onChange={(e) =>
              setFormStep2({
                ...formStep2,
                type: e.target.value,
              })
            }
          >
            <option value="">Seleccionar equipo</option>
            <option value="Computador de Mesa">Computador de Mesa</option>
            <option value="Portatil">Portatil</option>
          </select>
          <select
            className="w-full text-md h-8 my-3"
            value={formStep2.consulta}
            onChange={(e) =>
              setFormStep2({
                ...formStep2,
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
            value={formStep2.problem}
            className="w-full h-8 my-3"
            onChange={(e) =>
              setFormStep2({
                ...formStep2,
                problem: e.target.value,
              })
            }
          >
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
              <p className=" italic">{dataUser?.name}</p>
            </div>
            <div className="col-span-7 flex gap-2">
              <span className="font-medium italic">Fecha Solicitud: </span>
              <p className=" italic">{time}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b-2 mb-3 border-gray-300 ">
            <div className="col-span-5  flex gap-2">
              <span className="font-medium italic ">Equipo: </span>
              <p className="italic ">{formStep2.type}</p>
            </div>
            <div className="col-span-7  flex gap-2">
              <span className="font-medium italic">Sistema Operativo: </span>
              <p className=" italic">{systemOp}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className="col-span-12  flex gap-3 mb-1">
              <span className="font-medium italic">Tipo de consulta: </span>
              <p className={formStep2.consulta ==='Consulta programada'? "text-primary-100 italic": "text-red-600 italic"}>{formStep2.consulta}</p>
            </div>
            { formStep2.consulta === 'Consulta de emergencia' &&
              <div className="col-span-12  flex gap-3 mb-3">
                <p className="text-red-600 text-xs">*Tenga encuenta que las consultas de emergencia tienen un cargo.adicional por ahora</p>
              </div>
            }
            <div className="col-span-12  flex gap-3 mb-3 ">
              <span className="font-medium italic">Motivo Consulta: </span>
              <p className="text-red-600 italic">{formStep2.problem}</p>
            </div>
            {
              <div className="col-span-12  flex gap-3 mb-3">
                <span className="font-medium italic">
                  Tiempo estimado de reparacion:{" "}
                </span>
                <p className=" italic">01:00 horas</p>
              </div>
            }

          </div>
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
