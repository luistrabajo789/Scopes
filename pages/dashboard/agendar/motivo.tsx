import React from "react";
import CheckStep from "components/dashboard/steps/CheckStep";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import Step2 from "components/dashboard/steps/step2/Step2";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default function Datos() {
  return (
    <Layout>
      <Sidebar>
        <div className="flex flex-col w-full">
          <CheckStep stepNumber={2} />
          <Step2/>
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
  
  return {
    props: {
      session,
    },
  };
}
