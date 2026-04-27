"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const handleRegisterFunc = async (data) => {
  const {email ,name, photoURL , password } = data;
  const { data:res, error } = await authClient.signUp.email({
    name: name,
    email: email,// required
    password: password,
    image: photoURL,
    callbackURL: "/",
});
console.log(res , error)
if(error){
     alert(error.message);
}
if(res){
     alert('Sing UP succsessful ')
}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3] p-4">
      {/* Main Card Container */}
      <div className="card w-full max-w-[700px] bg-white shadow-sm rounded-none p-16">
        
        {/* Title and Divider */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-[#403F3F]">
            Register your account
          </h1>
          <div className="divider before:bg-gray-100 after:bg-gray-100 my-6"></div>
        </div>

        {/* Registration Form Start */}
        <form className="space-y-6" onSubmit={handleSubmit(handleRegisterFunc)}>
          
          {/* Name Field */}
          <div className="form-control">
            <label className="label pb-2">
              <span className="label-text font-semibold text-lg text-[#403F3F]">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className="input input-md w-full rounded-none bg-[#F3F3F3] border-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pl-6"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label pb-2 pt-0">
              <span className="label-text font-semibold text-lg text-[#403F3F]">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL")}
              placeholder="Enter your photo URL"
              className="input input-md w-full rounded-none bg-[#F3F3F3] border-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pl-6"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label pb-2 pt-0">
              <span className="label-text font-semibold text-lg text-[#403F3F]">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email address"
              className="input input-md w-full rounded-none bg-[#F3F3F3] border-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pl-6"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label pb-2 pt-0">
              <span className="label-text font-semibold text-lg text-[#403F3F]">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="input input-md w-full rounded-none bg-[#F3F3F3] border-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 pl-6"
              required
            />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3 py-2">
              <input 
                type="checkbox" 
                {...register("terms")}
                className="checkbox checkbox-sm rounded-none border-gray-300" 
                required
              />
              <span className="label-text text-[#706F6F] font-medium">
                Accept <span className="font-bold">Term & Conditions</span>
              </span>
            </label>
          </div>

          {/* Register Button */}
          <div className="form-control pt-4">
            <button
              type="submit"
              className="btn btn-md w-full rounded-none bg-[#403F3F] hover:bg-[#575656] text-white border-none text-lg font-bold"
            >
              Register
            </button>
          </div>
        </form>
        {/* Registration Form End */}

      </div>
    </div>
  );
};

export default RegisterPage;