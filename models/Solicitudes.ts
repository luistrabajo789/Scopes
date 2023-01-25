import mongoose, { Schema } from "mongoose";
var Usuarios = mongoose.model("Usuarios");

const SolicitudSchema = new mongoose.Schema(
  {
    name: { type: String, reqired: true },
    phone: { type: String, required: true },
    tipoConsulta: { type: String, required: false },
    so: { type: String, required: false },
    equipo: { type: String, required: false },
    motivo: { type: String, required: false },
    aditional: { type: String, required: false },
    tipoAgendamiento:{ type: String, required: false },
    fechaAgendamiento: { type: String, required: false },
    cantidad:{ type: String, required: false },
    costoConsulta: { type: String, required: false },
    validado:{ type: Boolean, required: false },

    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuarios",
    },
  },
  {
    timestamps: true,
  }
);

const Solicitudes =
  mongoose.models.Solicitudes || mongoose.model("Solicitudes", SolicitudSchema);

export default Solicitudes;
