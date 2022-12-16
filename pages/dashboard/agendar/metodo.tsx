import CheckStep from "components/dashboard/steps/CheckStep";
import Step3 from "components/dashboard/steps/Step3";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import React from "react";

export default function metodo() {
  return (
    <Layout>
      <Sidebar>
        <div className="flex flex-col w-full">
          <CheckStep stepNumber={3} />
          <Step3/>
        </div>
      </Sidebar>
    </Layout>
  );
}
