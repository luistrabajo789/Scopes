import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import es from 'date-fns/locale/es';

//list problems
const motivosDeConsultas = [
  "Soporte remoto para un solo equipo",
  "Soporte remoto para varios equipos",
  "Mantenimientos y reparacion de equipos para empresas o instituciones",
  "Adquisicion de equipos o componentes tecnologicos",
  "Consulta tecnológica para empresas e Instituciones",
  "Consulta acerca de la capacitación",
  "Otro",
];

const problemasComunes = [
  // "Problemas con el encendido o apagado del equipo",
  // "El equipo no enciende ni siquiera los leds o ventiladores (CPU - torre - base)",
  // "El equipo muestra una pantalla azul y se apaga",
  // "Alguno de tus dispositivos conectados dejaron de funcionar (teclado, mouse, touchpad, cámara e.t.c.)",
  // "El equipo se queda en el logo",
  // "Olvide la contraseña de mi Windows (Solución solo para Windows 7,8 y 10)",
  // "El equipo se apaga solo después de un rato o inmediatamente después de encenderlo",
  "Problemas con la conexión a Internet o la red",
  "El equipo tiene muchos anuncios de publicidad",
  "No aparecen los programas que usualmente uso",
  "Windows esta desactivado",
  "Office esta desactivado (Word, Excel, PowerPoint e.t.c.)",
  // "El equipo entra a un menú extraño (BIOS)",
  "Las USB que ingreso pierden la información o aparecen accesos directos",
  "Quiero instalar un programa, aplicacion o juego",
  "Actualizar un programa, controlador o Windows ",
  "Quiero poner seguridad a mi Equipo",
  "Quiero bloquear ciertas paginas del navegador o ciertas aplicaciones",
  "El equipo va lento",
  "El equipo enciende, pero no da imagen (Monitor - pantalla)",
  "Otro",
];

export default function SelectsForm({ dataForm, setDataForm }: any) {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 8)
  );

  useEffect(() => {
    setDataForm({
      ...dataForm,
      fechaAgendamiento: startDate,
    });
  }, [startDate]);

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
        <option value="">Seleccionar motivo de Consulta</option>
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
        className="w-full text-md h-8 mb-5"
        value={dataForm.tipoAgendamiento}
        onChange={(e) =>
          setDataForm({
            ...dataForm,
            tipoAgendamiento: e.target.value,
          })
        }
      >
        <option value="">Tipo de Agendamiento</option>
        <option value="Consulta programada">Consulta programada</option>
        <option value="Consulta de emergencia">Consulta de emergencia</option>
      </select>
      {dataForm.tipoAgendamiento === "Consulta programada" && (
        <>
          <span>Selecciona una fecha de las diponibles:</span>
          <DatePicker
            locale={es}
            className="mb-3 border p-2  text-blue-900"
            selected={startDate}
            onChange={(date) => date && setStartDate(date)}
            showTimeSelect
            excludeTimes={[
              setHours(setMinutes(new Date(), 0), 0),
              setHours(setMinutes(new Date(), 30), 0),
              setHours(setMinutes(new Date(), 0), 1),
              setHours(setMinutes(new Date(), 30), 1),
              setHours(setMinutes(new Date(), 0), 2),
              setHours(setMinutes(new Date(), 30), 2),
              setHours(setMinutes(new Date(), 0), 3),
              setHours(setMinutes(new Date(), 30), 3),
              setHours(setMinutes(new Date(), 0), 4),
              setHours(setMinutes(new Date(), 30), 4),
              setHours(setMinutes(new Date(), 0), 5),
              setHours(setMinutes(new Date(), 30), 5),
              setHours(setMinutes(new Date(), 0), 6),
              setHours(setMinutes(new Date(), 30), 6),
              setHours(setMinutes(new Date(), 0), 7),
              setHours(setMinutes(new Date(), 30), 7),
              setHours(setMinutes(new Date(), 0), 8),

              setHours(setMinutes(new Date(), 0), 12),
              setHours(setMinutes(new Date(), 30), 12),
              setHours(setMinutes(new Date(), 0), 1),
              setHours(setMinutes(new Date(), 30), 1),

              setHours(setMinutes(new Date(), 0), 17),
              setHours(setMinutes(new Date(), 30), 17),
              setHours(setMinutes(new Date(), 0), 18),

              setHours(setMinutes(new Date(), 30), 21),
              setHours(setMinutes(new Date(), 0), 22),
              setHours(setMinutes(new Date(), 30), 22),
              setHours(setMinutes(new Date(), 0), 23),
              setHours(setMinutes(new Date(), 30), 23),
            ]}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </>
      )}
    </>
  );
}
