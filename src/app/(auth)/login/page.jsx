"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const [showpass , setshowPass] = useState(false)
  const { register, handleSubmit } = useForm();
  const handleLoginFunc = async (data) => {
     const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
    //  console.log(res , error)
   
  };
  return (
    <div class="flex items-center justify-center min-h-screen rounded-md bg-[#F3F3F3] p-4">
      <div class="card  w-full max-w-[700px] bg-white shadow-sm rounded-xl p-16">
        <div class="text-center mb-10">
          <h1 class="text-3xl font-extrabold text-[#403F3F]">
            Login your account
          </h1>
          <div class="divider before:bg-gray-100 after:bg-gray-100 my-6"></div>
        </div>

        <form class="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>
          <div class="form-control">
            <label class="label pb-2">
              <span class="label-text font-semibold text-lg text-[#403F3F]">
                Email address
              </span>
            </label>
            <input
              type="email"
              {...register("email")}
            
              placeholder="Enter your email address"
              class="input input-md w-full rounded-none bg-[#F3F3F3] border-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pl-6"
              required
            />
          </div>

          <div class="form-control">
            <label class="label pb-2 pt-0">
              <span class="label-text font-semibold text-lg text-[#403F3F]">
                Password
              </span>
            </label>
            <input
              type={ showpass ? 'text' : "password"}
              {...register("password")}
           
              placeholder="Enter your password"
              class="input input-md w-full rounded-none bg-[#F3F3F3] border-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pl-6"
              required
              
            />
            <span onClick={ ()=> setshowPass(!showpass)}><FaEye></FaEye></span>
          </div>

          <div class="form-control pt-4">
            <button
              type="submit"
              class="btn btn-md w-full  rounded-sm bg-[#403F3F] hover:bg-[#575656] text-white border-none text-lg font-bold"
            >
              Login
            </button>
          </div>
        </form>
        <div class="text-center mt-12">
          <p class="text-base text-[#706F6F]">
            Dont’t Have An Account ?
            <Link
              href="/register"
              class="font-bold text-[#D72050] hover:underline ml-1"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
