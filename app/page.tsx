import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center  items-center flex-col ">
      <h1 className="text-5xl">Welcome </h1>

      <div className="flex gap-4 mt-4">
        <Button >
          <RegisterLink>Get Started</RegisterLink>
        </Button>

        <Button asChild variant={"outline"}>
          <LoginLink>
               Sign in
          </LoginLink>
        </Button>
      </div>
    </div>
  );
};

export default Home;
