import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { getMyCart } from "@/app/actions/cart.actions";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const cart = await getMyCart();
  return (
    <SessionProvider>
      {" "}
      <main className="flex min-h-screen w-full overflow-clip flex-col ">
        <Navbar cartCount={cart?.items.length || 0} />
        {children}
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default layout;
