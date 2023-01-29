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
    costoConsulta: "",
    fechaAgendamiento: "",
    validado: false,
  });

  
  //get data User and Os
  useEffect(() => {
    (async () => {
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
      await axios
        .get(`${domain}/api/user`)
        .then((res) => {
          setDataForm({
            ...dataForm,
            nombre: res.data.name,
            phone: res.data.phone,
            os: navigator.platform,
          });
          res.data._id && setidUser(res.data._id);
        })
        .catch((error) => {
          toastError();
        });
    })();

    if (formComplete === true) {
      toastOK();
      push("/dashboard/agendar/metodo");
    }
  }, [formComplete]);

  const createSolicitud = async (e: any) => {
    e.preventDefault();
    try {
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;

      const res1 = await fetch(`${domain}/api/solicitud/${idUser}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(dataForm),
      });
      const resBackend = await res1.json();

      resBackend.message === "OK" && setFormComplete(true);

      const res2 = await fetch("https://formspree.io/f/moqbebvn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const { ok } = await res2.json();
    } catch (error) {
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
        <div className="col-span-12 md:col-span-4 p-3 h-full bg-white border-r ">
          <h3 className="my-5 text-md font-semibold text-green-800">
            Complete lo datos segun su necesidad
          </h3>
          {/* Component SelectsForm*/}
          <SelectsForm dataForm={dataForm} setDataForm={setDataForm} />
        </div>
        {/* Component PreviewForm*/}
        <div className="col-span-12 md:col-span-8">
          <PreviewForm dataForm={dataForm} setDataForm={setDataForm} />
        </div>

        <div className="bg-white col-span-12 p-5 flex justify-end ">
          {dataForm.tipoAgendamiento.length > 1 &&
          dataForm.motivoConsulta.length > 1 ? (
            <button className=" px-7 py-3 btn-primary" type="submit">
              Solicitar
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
