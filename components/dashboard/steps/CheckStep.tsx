import React from "react";


export default function CheckStep({ stepNumber = 0}) {
  
  return (
    <div className="flex flex-col  border-b">
      <div className="p-4 space-y-2 bg-white text-gray-800">
        <h3 className="text-lg font-semibold">
          Paso {stepNumber+1}
        </h3>
        <div className="flex max-w-xs space-x-3">
          {[
            "Completar datos",
            "Agendamiento",
            "Completar Solicitud",
          ].map((step, index) => (
            <span
              key={step}
              className={` w-12 h-2 rounded-sm ${
                index <= stepNumber ? "bg-stone-800" : " bg-gray-400"
              } `}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
