import React from "react";

//list problems
const motivosDeConsultas = [
  "Seleccionar motivo de Consulta",
  "Soporte remoto para un solo equipo",
  "Soporte remoto para varios equipos",
  "Mantenimientos y reparacion de equipos para empresas o instituciones",
  "Adquisicion de equipos o componentes tecnologicos",
  "Consulta tecnológica para empresas e Instituciones",
  "Consulta acerca de la capacitación",
  "Otro",
];

const problemasComunes = [
  "Problemas con el encendido o apagado del equipo",
  "El equipo enciende, pero no da imagen (Monitor - pantalla)",
  "El equipo no enciende ni siquiera los leds o ventiladores (CPU - torre - base)",
  "El equipo se apaga solo después de un rato o inmediatamente después de encenderlo",
  "Problemas con la conexión a Internet o la red",
  "Alguno de tus dispositivos conectados dejaron de funcionar (teclado, mouse, touchpad, cámara e.t.c.)",
  "El equipo tiene muchos anuncios de publicidad",
  "No aparecen los programas que usualmente uso",
  "Windows no está activado",
  "Office no está activado (Word, Excel, PowerPoint e.t.c.)",
  "El equipo se queda en el logo",
  "El equipo entra a un menú extraño (BIOS)",
  "El equipo muestra una pantalla azul y se apaga",
  "Las USB que ingreso pierden la información o aparecen accesos directos",
  "Olvide la contraseña de mi Windows (Solución solo para Windows 7,8 y 10)",
  "Otro",
];

export default function SelectsForm({ dataForm, setDataForm }: any) {
  return (
    <>
      <select
        required
        className="w-full text-md h-8 mb-5"
        value={dataForm.motivoConsulta}
        onChange={(e) =>
          setDataForm({
            ...dataForm,
            motivoConsulta: e.target.value,
          })
        }
      >
        {motivosDeConsultas.map((consulta, index) => (
          <option key={index} value={consulta}>
            {consulta}
          </option>
        ))}
      </select>
      {dataForm.motivoConsulta === "Soporte remoto para varios equipos" ? (
        <>
          <label htmlFor="">Cantidad equipos:</label>
          <input
            required
            type="number"
            placeholder="Ingrese cantidad de equipos"
            value={dataForm.cantidad}
            className="w-full h-8 border outline-slate-400  mb-5 p-2"
            onChange={(e) =>
              setDataForm({
                ...dataForm,
                cantidad: e.target.value,
              })
            }
          />
        </>
      ) : (
        ""
      )}

      {dataForm.motivoConsulta === "Soporte remoto para un solo equipo" ||
      dataForm.motivoConsulta === "Soporte remoto para varios equipos" ? (
        <select
          required
          value={dataForm.problem}
          className="w-full h-8  mb-5"
          onChange={(e) =>
            setDataForm({
              ...dataForm,
              problem: e.target.value,
            })
          }
        >
          <option value="">Seleccionar Problema</option>
          {problemasComunes.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <hr />
      )}
      <select
        required
        className="w-full text-md h-8"
        value={dataForm.tipoAgendamiento}
        onChange={(e) =>
          setDataForm({
            ...dataForm,
            tipoAgendamiento: e.target.value,
          })
        }
      >
        <option value="">Tipo de Consulta</option>
        <option value="Consulta de emergencia">Consulta de emergencia</option>
        <option value="Consulta programada">Consulta programada</option>
      </select>
    </>
  );
}
