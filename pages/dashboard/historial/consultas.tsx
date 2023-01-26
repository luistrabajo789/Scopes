
import TableConsulta from "components/dashboard/TableConsulta";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import React from "react";

export default function historial() {
  return (
    <Layout>
      <Sidebar>
        <TableConsulta/>
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