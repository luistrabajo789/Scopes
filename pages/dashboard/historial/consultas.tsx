
import TableConsulta from "components/dashboard/TableConsulta";
import Layout from "components/Layout/Layout";
import Sidebar from "components/Layout/Sidebar";
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
