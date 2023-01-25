/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toastError, toastOK } from "utils/toast";
import PreviewForm from "./PreviewForm";
import SelectsForm from "./SelectsForm";


export default function Step2() {
  const { push } = useRouter();
  const [formComplete, setFormComplete] = useState(false);
  const [idUser, setidUser] = useState(null);
  const [dataForm, setDataForm] = useState({
    nombre: "",
    phone: "",
    type: "",
    problem: "",
    motivoConsulta: "",
    os: "",
    aditional: "",
    tipoAgendamiento: "",
    cantidad: "",
    costoConsulta: "0",
    fechaAgendamiento:"",
    validado: false
  });



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

    try {
      const res = await fetch("https://formspree.io/f/moqbebvn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const { ok } = await res.json();
      console.log(ok);
      toastOK();
    } catch (error) {
      console.log(error);
      toastError();
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => createSolicitud(e)}
        className="grid grid-cols-12 h-52  text-sm text-gray-700"
      >
        {/* section selects */}
        <div className="col-span-12 md:col-span-4 p-3 h-full bg-white border-r-2 ">
          <h3 className="my-5 text-md">
            Seleccione el motivo de consulta segun su necesidad
          </h3>
          {/* Component SelectsForm*/}
          <SelectsForm dataForm={dataForm} setDataForm={setDataForm} />
        </div>
        {/* Component PreviewForm*/}
        <div className="col-span-12 md:col-span-8">
          <PreviewForm dataForm={dataForm} setDataForm={setDataForm} />
        </div>

        <div className="bg-white col-span-12 p-5 flex justify-end ">
          <button className=" px-7 py-3 btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
