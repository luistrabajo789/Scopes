import Loader1 from "components/loaders/Loader1";
import { useRouter } from "next/router";
import React from "react";

export default function Pruebas() {
  const router = useRouter();
  console.log(router.basePath);

  console.log(router.asPath);
  console.log(router.route);
  console.log(router.query);
  console.log(router.pathname);
  return (
    <div>
      <Loader1 />
    </div>
  );
}
