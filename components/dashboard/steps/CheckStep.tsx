import React from "react";


export default function CheckStep({ stepNumber = 0}) {
  
  return (
    <div className="flex flex-col">
      <div className="p-4 space-y-2 bg-gray-100 text-gray-800">
        <h3 className="text-base font-semibold">
          Paso {stepNumber} Complete los datos y continue
        </h3>
        <div className="flex max-w-xs space-x-3">
          {[
            "Completar datos",
            "Razon Consulta",
            "Agendamiento",
            "Completar Solicitud",
          ].map((step, index) => (
            <span
              key={step}
              className={` w-12 h-2 rounded-sm ${
                index <= stepNumber ? "bg-violet-600" : " bg-gray-400"
              } `}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
