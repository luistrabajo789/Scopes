import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import profile from "public/profile.jpg";
import { useEffect, useState } from "react";

type TyUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  __v?: number;
  createdAt: string;
  updatedAt: string;
};

export default function Step1Form() {
  const [dataUser, setdataUser] = useState<TyUser>();
  const [stateForm, setstateForm] = useState(false);

  //Hook para manejar el formulario
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //funcion para traer los datos de usuario
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/user");
      const datajs = await res.json();
      setdataUser(datajs);
    })();
  }, []);

  // Funcion para actualizar de datos del usuario
  const onSubmit = async (data: Object) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/user/${dataUser?._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application-json",
            "Content-Type": "application-json",
          },
          body: JSON.stringify(data),
        }
      );
      const resBackend = await res.json();
      resBackend.message === "complete" && setstateForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container flex flex-col mx-auto  ng-untouched shadow-md ng-pristine ng-valid"
    >
      <div className="grid grid-cols-4 gap-6  p-10  rounded-md shadow-sm bg-gray-100">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <Image
            className="rounded-full"
            src={profile}
            width={60}
            height={60}
            alt="foto"
          />
          <p className="font-medium">Informacion Basica</p>
          <p className="text-md">
            Por favor complete los siguientes datos para continuar
          </p>
          <div></div>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">
              Nombres
            </label>
            <input
              {...register("name")}
              placeholder={dataUser?.name}
              required
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Telefono
            </label>
            <input
              {...register("phone")}
              name="phone"
              required
              id="phone"
              type="text"
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />{" "}
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email")}
              placeholder={dataUser?.email}
              name="email"
              id="email"
              required
              type="text"
              className="w-full rounded-md border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />{" "}
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Direccion
            </label>
            <input
              {...register("adress")}
              name="address"
              id="address"
              required
              type="text"
              placeholder=""
              minLength={4}
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">
              Ciudad
            </label>
            <input
              {...register("city")}
              name="city"
              id="city"
              required
              type="text"
              placeholder=""
              minLength={4}
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm">
              Departamento
            </label>
            <input
              {...register("state")}
              name="state"
              id="state"
              type="text"
              required
              placeholder=""
              minLength={4}
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-white justify-end px-10 py-5">
        <button
          className="rounded-md px-7 py-3 bg-secondary-100 text-white"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
