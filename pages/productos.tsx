import React from "react";

import Layout from "components/Layout/Layout";
 
// import { dataPageProducts } from "utils/dataPages/dataProducts";

export default function productos() {
  return (
    <Layout>
      <section className="text-gray-600 my-32">
        <div className="container px-5  mx-auto">
        <div className="grid grid-cols-12 gap-3">
          productos
            {/* {dataPageProducts.map((e) => (
              <div
                className="col-span-3  h-60 text-center gap-5 "
                key={e._id}
                style={{ background: `url(${e.image})` }}
              >
                <div className="bg-black/50 h-full flex flex-col justify-items-center justify-center text-white">
                  <h1 className="font-bold text-xl">{e.titleCardProduct}</h1>
                  <p>{e.descriptionCard}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
