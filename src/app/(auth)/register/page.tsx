import React, { Suspense } from "react";
import Register from "../_component/register";

const page = () => {
  return (
    <Suspense>
      <Register />
    </Suspense>
  );
};

export default page;
