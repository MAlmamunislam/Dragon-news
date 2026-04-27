'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import avatar from "@/assets/user.png"
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      setSession(data);
      // console.log(data);
    };

    fetchSession();
  }, []);
  const user = session?.user;
  // console.log(user)

  const logout = async () => {
    await authClient.signOut();
    setSession(null);
  };


  return (
    <div className="container mx-auto flex justify-between items-center mt-10">
      <div></div>
      <ul className="flex gap-4">
        <li>
          <Navlink href={'/'} >Home</Navlink>
        </li>
        <li>
          <Navlink href={'/about'}>About</Navlink>
        </li>
        <li>
          <Navlink href={'/career'}>Career</Navlink>
        </li>
      </ul>
      <div className="flex gap-3 items-center ">
        {user ? (
          
          <>
          <h2> Hello, {user.name}  </h2>  
            <Image className="border  rounded-full" src={user?.image || avatar} alt="user avatar" width={60} height={60}  />
            <button className="btn bg-purple-500 text-white" onClick={logout}>Logout</button>
          </>
        ) : (
          <button className="btn bg-purple-500 text-white"><Link href={'/login'}>LogIn</Link></button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
