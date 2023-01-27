import CheckStep from "components/dashboard/steps/CheckStep";
import Step3 from "components/dashboard/steps/Step3";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import React from "react";

export default function metodo() {
  return (
    <Layout>
      <Sidebar>
        <div className="flex flex-col w-full">
          <CheckStep stepNumber={2} />
          <Step3/>
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

