import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import { toastError } from "utils/toast";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }: any) => {
    setLoading(true)
    try {
      const result = await signIn("credentials", {
        redirect: true,
        email,
        password,
      });
    } catch (err) {
      toastError()
    }
  };

  return (
    <Layout>
      <section className="text-white body-font relative">
        <div className="container px-5  py-36 md:w-1/2 lg:w-1/3 m-auto ">
          <div className="bg-black/50 rounded-md shadow-2xl p-5 sm:px-8 sm:py-12">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Iniciar Sesion
            </h3>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: "Please enter valid email",
                    },
                  })}
                  autoComplete="off"
                  type="email"
                  className="flex-grow text-gray-700 text-md w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-stone-800 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="password"
                  className="inline-block mb-1 font-medium"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Please enter password",
                    minLength: {
                      value: 6,
                      message: "password is more than 5 chars",
                    },
                  })}
                  type="password"
                  className="flex-grow text-gray-700 text-md w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-stone-800 focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                />
                {errors.password && (
                  <div className="text-red-500 ">min. 6 caracteres</div>
                )}
              </div>
              <div className="mt-7 grid">
                <button type="submit" className="btn-primary">
                  {loading === true ? "Loading..." : "Iniciar Sesion"}
                </button>
              </div>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                {/* <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-neutral-600 bg-white">
                    {" "}
                    Or continue with{" "}
                  </span>
                </div> */}
              </div>
              <div>
                {/* <button
                  onClick={() => {
                    setLoading(true);
                    signIn("google");
                  }}
                  type="submit"
                  className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-6 h-6"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        ></path>
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible"></use>
                      </clipPath>
                      <path
                        clipPath="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      ></path>
                      <path
                        clipPath="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      ></path>
                      <path
                        clipPath="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      ></path>
                      <path
                        clipPath="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      ></path>
                    </svg>
                    <span className="ml-4"> Log in with Google</span>
                  </div>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (session?.user) {
    return {
      redirect: {
        destination: "/dashboard/agendar/datos",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
