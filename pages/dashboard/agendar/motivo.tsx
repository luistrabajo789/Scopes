import React from "react";
import CheckStep from "components/dashboard/steps/CheckStep";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import Step2 from "components/dashboard/steps/Step2";

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
