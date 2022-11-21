import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default function Index() {
  const dataWelcome = [
    {
      title: "Agendar Cita",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
    },
    {
      title: "Historial de Consultas",
      descripcion:
        "Crees que ya es tiempo hora de hacer un mantenimiento y no recuerdas?",
    },
    {
      title: "Historial de Compras",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
    },
    {
      title: "Modificar Perfil",
      descripcion: "Tienes algun problema con tu software? ¡Agendate!",
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
          <div className="flex flex-wrap gap-2 justify-center">
            {dataWelcome.map((card, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 shadow-md ">
                <div className="border border-gray-200 bg-white p-6 rounded-lg">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {card.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {card.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sidebar>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
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
}
