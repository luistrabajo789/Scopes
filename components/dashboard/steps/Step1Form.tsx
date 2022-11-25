import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import profile from "public/profile.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

type TyUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  city: string;
  state: string;
  __v?: number;
  createdAt: string;
  updatedAt: string;
};

export default function Step1Form() {
  const { data: session, status } = useSession();
  const [dataUser, setdataUser] = useState<TyUser>();
  const [stateForm, setstateForm] = useState(false);
  const [userRegister, setUserRegister] = useState({
    register:true,
    requiredPass:false 
  });
  console.log('Usuario registrado ? : '+ userRegister.register);
 
  

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
      await axios
        .get("http://localhost:3000/api/user")
        .then((res) => {
          console.log(res);
          setdataUser(res.data);
        })
        .catch((error) => {
          if (error.response.data.message === "not register") {
            setUserRegister({
              ...userRegister,
              requiredPass:true
            });
          }
        });
    })();
  }, []);

  // Funcion para actualizar de datos del usuario
  const onSubmitPut = async (data: Object) => {
    console.log('AQUI LLEGA EL ID'+dataUser?._id);
    
    console.log("consultando...");

    try {
      const res = await fetch(
        `http://localhost:3000/api/user/${dataUser?._id}`,
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
      console.log(resBackend);

      resBackend.message === "OK" && setstateForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitPost = async (data: Object) => {
    console.log("consultando...");

    try {
      const res = await fetch("http://localhost:3000/api/user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const resBackend = await res.json();
      console.log(resBackend);

      resBackend.message === "OK" && setstateForm(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={
        userRegister.register === true
          ? handleSubmit(onSubmitPut)
          : handleSubmit(onSubmitPost)
      }
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
              {...register("phone", { required: true, minLength: 4 })}
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
                Require minimo 4 caracteres
              </span>
            )}
          </div>
          {/* email */}
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email", {
                required: "Confirme su email por favor",
                minLength: 8,
              })}
              placeholder={dataUser?.email || session?.user?.email!}
              name="email"
              id="email"
              type="text"
              aria-invalid={errors.email ? "true" : "false"}
              className="w-full rounded-md border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
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
          {userRegister.requiredPass === true && (
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="password" className="text-sm">
                Nueva Contraseña
              </label>
              <input
                {...register("password", {
                  required: "Contraseña porfavor",
                  minLength: 6,
                })}
                name="v"
                id="password"
                type="password"
                className="w-full rounded-md border-2 border-gray-300 focus:outline-primary-100 p-2 text-gray-900"
              />
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 text-xs">
                  Require minimo 4 caracteres
                </span>
              )}
            </div>
          )}
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
            type="submit"
          >
            Continuar
          </button>
        )}
      </div>
    </form>
  );
}
