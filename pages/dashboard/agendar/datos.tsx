import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import Step1Form from "components/dashboard/steps/Step1Form";
import React from "react";
import CheckStep from "components/dashboard/steps/CheckStep";

export default function Datos() {
  return (
    <Layout>
      <Sidebar>
  <div className="flex flex-col">
  <CheckStep stepNumber={1}/>
        <Step1Form/>     
  </div>   
      </Sidebar>
    </Layout>
  );
}
