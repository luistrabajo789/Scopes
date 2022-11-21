import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

export default function Step1Form() {
  const { data: session, status } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

const onsubmit = (data: any)=>{
  console.log(data);
  
}


  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      action=""
      className="container flex flex-col mx-auto  ng-untouched shadow-md ng-pristine ng-valid"
    >
      <div className="grid grid-cols-4 gap-6  p-10  rounded-md shadow-sm bg-gray-100">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <Image
            className="rounded-full"
            src={session?.user?.image!}
            width={60}
            height={60}
            alt="foto"
          />
          <p className="font-medium">Informacion Basica</p>
          <p className="text-xs">
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
            {...register("name", { required: true })}
              id="name"
              name="name"
              type="text"
              value={session?.user?.name!}
              required
              className="w-full rounded-md  border-gray-300 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Telefono
            </label>
            <input
                 {...register("phone", { required: true, maxLength:10, minLength:10 })}
              name="phone"
              required
              id="phone"
              type="text"
              placeholder="3121231234"
              className="w-full rounded-md  border-gray-300 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              name="email"
              required
              id="email"
              type="email"
              value={session?.user?.email!}
              placeholder="Email"
              className="w-full rounded-md   border-gray-300 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Direccion
            </label>
            <input
            {...register("address", { required: true })}
              name="address"
              id="address"
              type="text"
              placeholder=""
              className="w-full rounded-md    border-gray-300 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">
              Ciudad
            </label>
            <input
                 {...register("Ciudad", { required: true })}
              required
              name="city"
              id="city"
              type="text"
              placeholder=""
              className="w-full rounded-md   border-gray-300 p-2 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm">
              Departamento
            </label>
            <input
            {...register("Departamento", { required: true })}
              required
              name="state"
              id="state"
              type="text"
              placeholder=""
              className="w-full rounded-md   border-gray-300 p-2 text-gray-900"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-white justify-end px-10 py-5"><button className="rounded-md px-7 py-3 bg-secondary-100 text-white" type="submit">Guardar</button></div>
    </form>
  );
}
