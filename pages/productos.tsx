import React from "react";

import Layout from "components/Layout/Layout";
import ProductCard from "components/cards/ProductCard";
import { dataPageProducts } from "utils/dataPages/dataProducts";

export default function productos() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-32 mx-auto">
          <div className="flex flex-wrap -m-4">
            {dataPageProducts.map((product) => (
              <ProductCard
                key={product._id}
                image={product.image}
                titleCardProduct={product.titleCardProduct}
                descriptionCard={product.descriptionCard}
                category={product.category}
                price={product.price}
                link={product.link} 
                _id={0}
                              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
