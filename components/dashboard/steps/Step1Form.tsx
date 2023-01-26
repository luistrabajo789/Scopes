/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import profile from "public/profile.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loader1 from "components/loaders/Loader1";
import { toastError } from "utils/toast";


/**
 *
 * @property {string} _id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} phone - The phone number of the user.
 * @property {string} password - The password for the user.
 * @property {string} address - The user's address
 * @property {string} city - The city the user lives in.
 * @property {string} state - The state of the user.
 * @property {number} __v - The version key is a property that Mongoose adds to your schema by default.
 * The version key is used to implement optimistic locking.
 * @property {string} createdAt - The date and time the user was created.
 * @property {string} updatedAt - The date and time when the user was last updated.
 * @property {string} complete - This is a string that will be either "true" or "false".
 */
export type TyUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  city: string;
  state: string;
  image:String;
  __v?: number;
  createdAt: string;
  updatedAt: string;
  complete: string;
};

export default function Step1Form() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [dataUser, setdataUser] = useState<TyUser>();
  const [stateForm, setstateForm] = useState(false);
  const [userRegister, setUserRegister] = useState({
    register: true,
    requiredPass: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();


  /* A useEffect hook that is being used to fetch data from the backend. */
  useEffect(() => {
    (async () => {
 
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
      await axios
        .get(`${domain}/api/user`)
        .then((res) => {
          setdataUser(res.data);
          res.data.complete === "true" &&
            router.push("/dashboard/agendar/motivo");
        })
        .catch((error) => {
          toastError()      
        });
    })();
  }, []);

  /**
   * A function that is used to register a user or update the data of a user.
   * @param {Object} [data] - The data that is passed to the form.
   */
  const onSubmit = async (data?: Object) => {
    if (userRegister.register === true) {
 
      try {
        const windowsRoute = window.location.href;
        const url = new URL(windowsRoute);
        const domain = url.origin;
        const res = await fetch(
          `${domain}/api/user/${dataUser?._id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(data),
          }
        );
        const resBackend = await res.json();
 

        resBackend.message === "OK" && setstateForm(true);
      } catch (error) {
        toastError()
      }
    } else if (userRegister.register === false) {
      const windowsRoute = window.location.href;
      const url = new URL(windowsRoute);
      const domain = url.origin;
  
      const res = await fetch(`${domain}/api/user`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const resBackend = await res.json();


      if (resBackend.message === "OK") {
        setstateForm(true);
        setUserRegister({
          ...userRegister,
          register: true,
          requiredPass: false,
        });
      }
    }
  };

  /**
   * It's a function that, when called, will push the user to the next step of the booking process
   */
  const completeStep = () => {
    router.push("/dashboard/agendar/motivo");
  };

  if (!dataUser || dataUser?.complete === "false" ) {
    return (<Loader1 />)
  }
  else return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container flex flex-col mx-auto  ng-untouched shadow-md ng-pristine ng-valid"
    >
      <div className="grid grid-cols-4 gap-6  p-10  rounded-md shadow-sm bg-white">
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
              value={dataUser?.email || session?.user?.email!}
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
        <button
          className="rounded-md px-7 py-3 bg-primary-100 text-white"
          type="submit"
        >
          Guardar
        </button>
        {stateForm === true && (
          <button
            className="rounded-md px-7 py-3 bg-secondary-100 text-white"
            type="button"
            onClick={completeStep}
          >
            Continuar
          </button>
        )}
      </div>
    </form>
  );
}

