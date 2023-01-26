import DashBoardCard from "components/cards/DashBoardCard";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";

import { authOptions } from "pages/api/auth/[...nextauth]";
import { useEffect, useState } from "react";

export default function Index({ session }: any) {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    setDomain(window.location.origin);
  }, []);

  const dataWelcome = [
    {
      title: "Agendar Cita",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
      link: `${domain}/dashboard/agendar/datos`,
    },
    {
      title: "Historial de Consultas",
      descripcion:
        "Crees que ya es tiempo hora de hacer un mantenimiento y no recuerdas?",
      link: `${domain}/dashboard/historial/consultas`,
    },
    {
      title: "Historial de Compras",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
      link: `${domain}/dashboard/compras`,
    },
    {
      title: "Modificar Perfil",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
      link: `${domain}/dashboard/perfil`,
    },
  ];

  return (
    <Layout>
      <Sidebar>
        <div className="mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-700">
              Bienvenido{" "}
              <span className="first:uppercase">{session?.user?.name}</span>
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Conoce las caracteristicas y el estado de tu equipo.
            </p>
          </div>
          <div className="grid grid-cols-12">
            {dataWelcome.map((card, index) => (
              <div className="col-span-6 m-2 " key={index}>
                <DashBoardCard
                  link={card.link}
                  title={card.title}
                  description={card.descripcion}
                />
              </div>
            ))}
          </div>
        </div>
      </Sidebar>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session?.user) {
    return {
      redirect: {
        destination: "/login",
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