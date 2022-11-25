import mongoose from "mongoose";

const ConsultasSchema = new mongoose.Schema(
  {
    motivo: { type: String },
    procedimiento: { type: String },
    fecha: { type: String },
    precio: { type: String },
  },
  {
    timestamps: true,
  }
);

const consultas =
  mongoose.models.consultas || mongoose.model("consultas", ConsultasSchema);

export default consultas;
