import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import profile from "public/profile.jpg";
import { useEffect, useState } from "react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getSession } from "next-auth/react";

type IntUser = {
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
  const [dataUser, setdataUser] = useState<IntUser>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
console.log(dataUser);

useEffect(() => {
(async()=>{
  const res = await fetch("http://localhost:3000/api/user");
  const datajs = await res.json();
  setdataUser(datajs)
})()

}, [])


  const onSubmit = async () => {
    try {
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
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
              {...register("name", {
                required: true,
                minLength: { value: 4, message: "Minimo de caractares 4" },
              })}
              value={dataUser?.name}
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.name && (
              <span className="text-red-500 text-sm py-2">
                Campo Obligatorio
              </span>
            )}
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Telefono
            </label>
            <input
              {...register("phone", {
                required: true,
                minLength: { value: 4, message: "Minimo de caractares 4" },
              })}
              name="phone"
              id="phone"
              type="text"
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />{" "}
            {errors.phone && (
              <span className="text-red-500 text-sm py-2">
                Campo Obligatorio
              </span>
            )}
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                minLength: { value: 4, message: "Minimo de caractares 4" },
              })}
              value={dataUser?.email}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />{" "}
            {errors.email && (
              <span className="text-red-500 text-sm py-2">
                Campo Obligatorio
              </span>
            )}
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Direccion
            </label>
            <input
              {...register("address", {
                required: true,
                minLength: { value: 4, message: "Minimo de caractares 4" },
              })}
              name="address"
              id="address"
              type="text"
              placeholder=""
              minLength={4}
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.address && (
              <span className="text-red-500 text-sm py-2">
                Campo Obligatorio
              </span>
            )}
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">
              Ciudad
            </label>
            <input
              {...register("city", {
                required: true,
                minLength: { value: 4, message: "Minimo de caractares 4" },
              })}
              name="city"
              id="city"
              type="text"
              placeholder=""
              minLength={4}
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.city && (
              <span className="text-red-500 text-sm py-2">
                Campo Obligatorio
              </span>
            )}
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm">
              Departamento
            </label>
            <input
              {...register("state", {
                required: true,
                minLength: { value: 4, message: "Minimo de caractares 4" },
              })}
              name="state"
              id="state"
              type="text"
              placeholder=""
              minLength={4}
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.state && (
              <span className="text-red-500 text-sm py-2">
                Campo Obligatorio
              </span>
            )}
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


