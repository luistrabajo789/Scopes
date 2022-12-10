import DashBoardCard from "components/cards/DashBoardCard";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";

import { getSession, useSession } from "next-auth/react";

export default function Index() {
  const dataWelcome = [
    {
      title: "Agendar Cita",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
      link: "https://fix-pc-soporte-remoto.vercel.app/dashboard/agendar/datos",
    },
    {
      title: "Historial de Consultas",
      descripcion:
        "Crees que ya es tiempo hora de hacer un mantenimiento y no recuerdas?",
      link: "https://fix-pc-soporte-remoto.vercel.app/",
    },
    {
      title: "Historial de Compras",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
      link: "https://fix-pc-soporte-remoto.vercel.app/",
    },
    {
      title: "Modificar Perfil",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
      link: "https://fix-pc-soporte-remoto.vercel.app/",
    },
  ];
  const { data: session, status } = useSession();

  return (
    <Layout>
      <Sidebar>
        <div className="mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Bienvenido {session?.user?.name}
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Conoce las caracteristicas y el estado de tu equipo.
            </p>
          </div>
          <div className="grid grid-cols-12">
            {dataWelcome.map((card, index) => (
              <div className="col-span-6 m-2" key={index}>
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
