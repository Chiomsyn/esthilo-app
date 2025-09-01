import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signUpDefaultValues } from "@/lib/constants";

const ForgotPassword = () => {
  return (
    <div className="w-full max-w-md">
      <div>
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Link href={"/"} className="absolute left-4 top-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              Luxura
            </h1>
          </div>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Enter your email address and we&apos;ll send you a link to reset
            your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  defaultValue={signUpDefaultValues.email}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>
            <div className="text-right">
              <Link href="/login" type="button" className="p-0 h-auto text-sm">
                Remember password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
      </div>
    </div>
  );
};

export default ForgotPassword;
