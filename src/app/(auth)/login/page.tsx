import React, { Suspense } from "react";
import Login from "../_component/login";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

const page = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default page;
