'use client';
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleSignin = async () => {
      const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)

  }
  const handleGihubSignin = async () => {
      const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data)

  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 ">Login with</h2>
      <div className=" flex flex-col  w-8/10 mx-auto gap-2">
        <button onClick={handleGoogleSignin} className="btn text-blue-800  border-blue-500">
          <FaGoogle /> login with google
        </button>
        <button onClick={ handleGihubSignin} className="btn">
          <FaGithub /> login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
