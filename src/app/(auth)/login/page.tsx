import React, { Suspense } from "react";
import Login from "../_component/login";

const page = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default page;
