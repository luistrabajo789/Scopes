import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "luis",
      email: "luis@gmail.com",
      password: bcrypt.hashSync("123456"),
      phone: "",
      address: "",
      city: "",
      state: "",
      complete: "",
    },
    {
      name: "sara",
      email: "sara@gmail.com",
      password: bcrypt.hashSync("123456"),
      phone: "",
      address: "",
      city: "",
      state: "",
      complete: "",
    },
  ],
  dataProducts: [
    {
      _id: 1,
      image: "public/ssd240.webp",
      titleCardProduct: "",
      descriptionCard: "Esto es la descripcion del producto",
      category: "Hardware",
      price: 123456,
      link: "",
    },
    {
      _id: 2,
      image: "public/ddr4_8.webp",
      titleCardProduct: "Disco sólido SSD2",
      descriptionCard: "Esto es la descripcion del producto",
      category: "Hardware",
      price: 123456,
      link: "",
    },
    {
      _id: 3,
      image: "public/nv1500.webp",
      titleCardProduct: "Disco sólido SSD interno Kingston NV1 SNVS",
      descriptionCard: "Esto es la descripcion del producto",
      category: "Hardware",
      price: 123456,
      link: "",
    },
  ],
  dataSolicitud: [
    {
      name: "luis",
      phone: "3123123123",
      tipoConsulta: "emergencia",
      so: "Linux",
      equipo: "Computador de mesa",
      motivo: "El equiva va lento o se congela",
      aditional: "dlskajdlksajdlksa",
    },
  ],
};
export default data;
