import Image from "next/image";
import React, { useEffect, useState } from "react";
import nequi from "public/logos/nequi.png";
import bancolombia from "public/logos/bancolombia.png";
import axios from "axios";

export default function Step3() {
  const [valueSelect, setValueSelect] = useState({ metodo: "" });
  console.log(valueSelect);
// useEffect(() => {
//   (async()=>{
//     await axios.get()
//   })()
// }, [])

  return (
    <div className="grid grid-cols-12 bg-white">
      <div className="col-span-4 p-3">
        <h1 className="mb-3">Seleccione metodo de pago</h1>
        <div className="grid p-3">
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
      </div>
      <div className="col-span-6 p-3">
        {valueSelect.metodo === "nequi" ? (
          <>
            <div className="">
              <div className="grid grid-cols-12 mb-3">
                <Image  className="" src={nequi} alt="nequi" />
              </div>
              <p>
                Para que solicitud sea procesada por favor cancele el monto exacto de la consulta 
              </p>
            </div>
          </>
        ) : (
          <Image className="" src={bancolombia} alt="bancolombia" />
        )}
      </div>
    </div>
  );
}
