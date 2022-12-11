import mongoose from "mongoose";

const SolicitudSchema = new mongoose.Schema(
  {
    name: { type: String, reqired: true },
 
    phone: { type: String, required: true },
    tipoConsulta: { type: String, required: false },
    so: { type: String, required: false },
    equipo: { type: String, required: false },
    motivo: { type: String, required: false },
    aditional:{type:String, required: false }
  },
  {
    timestamps: true,
  }
);

const solicitud = mongoose.models.solicitud || mongoose.model("solicitud", SolicitudSchema);

export default solicitud;
