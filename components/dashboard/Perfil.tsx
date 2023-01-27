/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toastError, toastOK } from "utils/toast";
import profile from "../../public/profile.jpg";
import { TyUser } from "./steps/Step1Form";

export default function Perfil() {
  const [dataUser, setdataUser] = useState<TyUser>();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
      const res = await fetch(`${domain}/api/user`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const resBackend = await res.json();
      setdataUser(resBackend);
    })();
  }, []);

  const onSubmit = async (data?: Object) => {
    try {
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
      const res = await fetch(`${domain}/api/user/${dataUser?._id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      });
      const resBackend = await res.json();
      console.log(resBackend);
      toastOK();
    } catch (error) {
      toastError();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container flex flex-col mx-auto  ng-untouched shadow-md ng-pristine ng-valid"
    >
      <div className="grid grid-cols-4 gap-6  p-10  rounded-md shadow-sm bg-white">
      <div className=" border-r  col-span-full flex flex-col justify-items-center  lg:col-span-1">
        <h3 className="font-bold text-lg my-5">Informacion Basica</h3>
        <div className="col-span-full grid place-content-center">
        <Image
            className="rounded-full object-cover items-center mb-5"
            src={profile}
    height={96}
            alt="foto"
          />
        </div>


          <p className="text-md">
            Para continuar, por favor complete los siguientes datos para continuar
          </p>
          <div></div>
        </div>

        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          {/* name */}
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">
              Nombres
            </label>
            <input
              {...register("name", { required: true, minLength: 4 })}
              placeholder={dataUser?.name}
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500 text-xs">
                Debes completar este campo
              </span>
            )}
            {errors.name?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                Require minimo 4 caracteres
              </span>
            )}
          </div>
          {/* phone */}
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Telefono
            </label>
            <input
              {...register("phone", { required: true, minLength: 9 })}
              placeholder={dataUser?.phone}
              name="phone"
              id="phone"
              type="text"
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />{" "}
            {errors.phone?.type === "required" && (
              <span className="text-red-500 text-xs">
                Debes completar este campo
              </span>
            )}
            {errors.phone?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                Require minimo 9 caracteres
              </span>
            )}
          </div>
          {/* email */}
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email")}
              value={dataUser?.email}
              name="email"
              id="email"
              readOnly
              aria-invalid={errors.email ? "true" : "false"}
              className="w-full rounded-md  bg-gray-300 border-gray-300 p-2 text-gray-900"
            />
            {errors.email && (
              <p role="alert" className="text-red-500 text-xs">
                Ecribe un correo valido
              </p>
            )}
            {errors.address?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                Require minimo 4 caracteres
              </span>
            )}
          </div>
          {/* password */}
          {/* {userRegister.requiredPass === true && (
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="password" className="text-sm">
              Nueva Contraseña
            </label>
            <input
              {...register("password", {
                required: "Escribe una nueva contraseña porfavor",
                minLength: 6,
              })}
              name="password"
              id="password"
              type="password"
              className="w-full rounded-md border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors?.password?.type === "requerid" && (
              <span className="text-red-500 text-xs">
                Este campo es requerido
              </span>
            )}
          </div>
        )} */}
          {/* address */}
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Direccion
            </label>
            <input
              {...register("address", { required: true, minLength: 4 })}
              placeholder={dataUser?.address}
              name="address"
              id="address"
              type="text"
              minLength={4}
              className="w-full rounded-md  border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.address?.type === "required" && (
              <span className="text-red-500 text-xs">
                Debes completar este campo
              </span>
            )}
            {errors.address?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                Require minimo 4 caracteres
              </span>
            )}
          </div>
          {/* city */}
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">
              Ciudad
            </label>
            <input
              {...register("city", { required: true, minLength: 4 })}
              placeholder={dataUser?.city}
              name="city"
              id="city"
              type="text"
              minLength={4}
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.city?.type === "required" && (
              <span className="text-red-500 text-xs">
                Debes completar este campo
              </span>
            )}
            {errors.city?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                Require minimo 4 caracteres
              </span>
            )}
          </div>
          {/* state */}
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm">
              Departamento
            </label>
            <input
              {...register("state", { required: true, minLength: 4 })}
              placeholder={dataUser?.state}
              name="state"
              id="state"
              type="text"
              minLength={4}
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
            {errors.state?.type === "required" && (
              <span className="text-red-500 text-xs">
                Debes completar este campo
              </span>
            )}
            {errors.state?.type === "minLength" && (
              <span className="text-red-500 text-xs">
                Require minimo 4 caracteres
              </span>
            )}
          </div>
          <div className="col-span-full sm:col-span-2">
            <input
              hidden
              {...register("complete")}
              value="true"
              name="complete"
              id="complete"
              className="w-full rounded-md   border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
            />
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-3 bg-white justify-end px-10 py-5">
        <button className="  px-7 py-3 btn-primary " type="submit">
          Guardar
        </button>
        {/* {stateForm === true && (
        <button
          className="rounded-md px-7 py-3 bg-secondary-100 text-white"
          type="button"
          onClick={completeStep}
        >
          Continuar
        </button>
      )} */}
      </div>
    </form>
  );
}
