import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { TyUser } from "./Step1Form";

export default function Step2() {
  const [dataUser, setdataUser] = useState<TyUser>();
  const [formComplete, setFormComplete] = useState(false);
  const [time, setTime] = useState();
  const [systemOp, setSystemOp] = useState('');
  const [formStep2, setFormStep2] = useState({
    type: "",
    problem: "",
  });
  console.log(systemOp);
  

  useEffect(() => {
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    }
    setSystemOp(finalOs)
  
  }, [])
  
  let today = new Date();

  setTimeout(() => setTime(today.toLocaleString()), 1000);

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
        <div className="col-span-4 p-3 h-96 bg-slate-400 ">
          <select
            className="w-full text-md h-8 my-3"
            value={formStep2.type}
            onChange={(e) =>
              setFormStep2({
                ...formStep2,
                type: e.target.value,
              })
            }
          >
            <option value="">Seleccionar tipo de equipo</option>
            <option value="Computador de Mesa">Computador de Mesa</option>
            <option value="Portatil">Portatil</option>
          </select>
          <select value={formStep2.problem} className="w-full h-8 my-3" 
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
        <div className="col-span-8 p-10 flex flex-col gap-1  bg-white">
          <div className="grid grid-cols-12 p-1">
            <div className="col-span-4  flex gap-1">
              <span className="font-semibold">Nombre: </span>
              <p className="text-green-700 underline">{dataUser?.name}</p>
            </div>
            <div className="col-span-8 flex gap-1">
              <span className="font-semibold">Fecha Solicitud: </span>
              <p className="text-green-700 underline">{time}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 p-1">
            <div className="col-span-4  flex gap-1">
              <span className="font-semibold">Tipo: </span>
              <p className="text-green-700 underline">{formStep2.type}</p>
            </div>
            <div className="col-span-8  flex gap-1">
              <span className="font-semibold">Sistema Operativo: </span>
              <p className="text-green-700 underline">{systemOp}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 p-1">
            <div className="col-span-8  flex gap-2">
              <span className="font-semibold">Motivo Consulta: </span>
              <p className="text-green-700 underline">{formStep2.problem}</p>
            </div>

          </div>
        </div>
      </form>

      <div className="flex justify-end p-1">
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
