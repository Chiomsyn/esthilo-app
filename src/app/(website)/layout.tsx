import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      {" "}
      <main className="flex min-h-screen w-full overflow-clip flex-col ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default layout;
