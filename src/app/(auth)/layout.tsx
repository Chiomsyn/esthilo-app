import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import AuthTab from "./_component/tab";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-gray-50/30">
        <Card className="border-0">
          <CardContent>
            <AuthTab />
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default layout;
