import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
import Step1Form from "components/dashboard/steps/Step1Form";
import React from "react";

export default function agendar() {
  return (
    <Layout>
      <Sidebar>
        <div className="flex flex-col">
        <div className="p-4 space-y-2 bg-gray-100 text-gray-800">
          <h3 className="text-base font-semibold">
            Step 3: Fill in order details
          </h3>
          <div className="flex max-w-xs space-x-3">
            <span className="w-12 h-2 rounded-sm bg-violet-600"></span>
            <span className="w-12 h-2 rounded-sm bg-violet-600"></span>
            <span className="w-12 h-2 rounded-sm bg-gray-800"></span>
            <span className="w-12 h-2 rounded-sm bg-gray-400"></span>
            <span className="w-12 h-2 rounded-sm bg-gray-400"></span>
          </div>
        </div>
        <Step1Form />
        <div className=" flex justify-end p-5">
          <button className="bg-secondary-100 rounded px-5 py-2">Continuar</button>
        </div>
        </div>
      </Sidebar>
    </Layout>
  );
}
