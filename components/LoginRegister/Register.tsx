
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toastError, toastOK } from "utils/toast";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const {push} = useRouter()

  const onSubmit = async (data:any) => {
    try {
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
      const res = await fetch(`${domain}/api/user`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    });
    const response = await res.json();

    push('/login')
    toastOK();
    } catch (error) {

      toastError()      
    }
  };

  return (
    <div className="bg-white rounded-md shadow-xl p-5 lg:p-7 text-stone-800">
      <h3 className="mb-4 text-lg  sm:text-center sm:mb-6 sm:text-2xl">
        Registrarse
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 sm:mb-2 ">
          <label htmlFor="firstName" className="inline-block mb-1 font-medium">
            Nombres
          </label>
          <input
            {...register("name", {
              required: true,
              minLength: { value: 4, message: "Minimo de caractares 4" },
            })}
            autoComplete="off"
            placeholder="Ana Maria Segura"
            required
            type="text"
            className="flex-grow w-full h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-stone-800 focus:outline-none focus:shadow-outline"
            id="nameRegister"
            name="name"
          />

          {errors.name && (
            <span className="text-red-500 text-xs">Campo Obligatorio</span>
          )}
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="lastName" className="inline-block mb-1 font-medium">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              minLength: { value: 4, message: "Minimo de caractares 4" },
            })}
            autoComplete="off"
            required
            type="email"
            className="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-stone-800 focus:outline-none focus:shadow-outline"
            id="emailRegister"
            name="email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">Campo Obligatorio</span>
          )}
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="email" className="inline-block mb-1 font-medium">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: { value: 4, message: "Minimo de caractares 4" },
            })}
            required
            type="password"
            className="flex-grow w-full h-12 px-4   transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-stone-800 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">Campo Obligatorio</span>
          )}
        </div>
        <div className="mt-7 grid ">
          <button type="submit" className="btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

