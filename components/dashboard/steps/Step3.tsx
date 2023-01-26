import Image from "next/image";
import React, { useEffect, useState } from "react";
import nequi from "public/logos/nequi.png";
import bancolombia from "public/logos/bancolombia.png";

import Link from "next/link";

export default function Step3() {
  const [valueSelect, setValueSelect] = useState({ metodo: "" });


  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className="grid grid-cols-12 bg-white text-gray-700 text-sm">
      <div className="col-span-5 p-3 border-r">
        <h1 className="mb-3 text-lg font-semibold mt-5">Validar solicitud</h1>
        <p className="">
          Para validar su agendamiento realicé la cancelación total de la
          operación usando algunos de los siguientes medios:{" "}
        </p>

        <div className="grid py-5 outline-none active:outline-none hover:outline-none">
          <select
            onChange={(e) =>
              setValueSelect({
                ...valueSelect,
                metodo: e.target.value,
              })
            }
            className="p-2"
          >
            <option value="nequi">Nequi</option>
            <option value="bancolombia">Bancolombia</option>
          </select>
        </div>
        <p className="font-semibold py-3 text-md">
          Costo de la total de la operación: $70.000
        </p>
        <p className="text-gray-700 text-xs mb-5">
          Una vez agendada la cita podrá realizar el pago dentro de las 24 horas
          posteriores, si no se realiza dentro de este tiempo tu solicitud será
          descartada.
        </p>
      </div>
      <div className="col-span-7 py-5 flex flex-wrap items-center  justify-center">
        {valueSelect.metodo === "bancolombia" ? (
          <>
            <div className="relative mb-4">
              <Image
                width={300}
                height={300}
                className="mx-auto"
                src={bancolombia}
                alt="bancolombia"
              />
              <p className="py-5">
                Para realizar el pago mediante el Bancolombia tenga en cuenta lo
                siguiente:
              </p>
              <ol>
                <li>1. Deberá tener una cuenta Bancolombia</li>
                <li>
                  2. Enviar el total de la operación al siguiente número de
                  cuenta: <strong>912-004282-48</strong>
                </li>
                <li>
                  3. Tomar screenshot del ticket o la confirmación y enviarlo
                  por WhatsApp al mismo número 314 800 8281
                </li>
                <li>
                  4. Una vez validada la consulta uno de nuestros colaboradores
                  se comunicara con contigo.
                </li>
              </ol>
            </div>
          </>
        ) : (
          <>
            <div className="relative mb-4 ">
              <Image
                width={100}
                height={100}
                className="mx-auto"
                src={nequi}
                alt="nequi"
              />
              <p className="py-5">
                Para realizar el pago mediante el Nequi tenga en cuenta lo
                siguiente:
              </p>
              <ol>
                <li>1. Deberá tener una cuenta Nequi</li>
                <li>
                  2. Enviar el total de la operación al siguiente número de
                  celular: <strong>314 800 8281</strong>
                </li>
                <li>
                  3. Tomar screenshot del ticket o la confirmación y enviarlo
                  por WhatsApp al mismo número
                </li>
                <li>
                  4. Una vez validada la consulta uno de nuestros colaboradores
                  se comunicara con contigo.
                </li>
              </ol>
            </div>
          </>
        )}
      </div>
      <div className="bg-white col-span-12 p-5 flex justify-end ">
        <Link
          href="/dashboard/historial/consultas"
          className="btn-primary  px-7 py-3"
        >
          Ver historial de solicitudes
        </Link>
      </div>
    </div>
  );
}
