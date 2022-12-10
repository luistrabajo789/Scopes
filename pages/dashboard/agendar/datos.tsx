import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import Step1Form from "components/dashboard/steps/Step1Form";
import React from "react";
import CheckStep from "components/dashboard/steps/CheckStep";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default function Datos({session}:any) {
  return (
    <Layout>
      <Sidebar>
        <div className="flex flex-col">
          <CheckStep stepNumber={1} />
          <Step1Form/>
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
    }
  }

  console.log(session);
  
  return {
    props: {
      session,
    },
  };
}
