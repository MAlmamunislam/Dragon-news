'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Navlink = ({href , children}) => {
     const pathName = usePathname();
     // console.log(pathName)
     const isAactive = pathName === href
     return (
          <div>
               <Link href={href} className={`${isAactive? 'border border-green-500 p-1 border-2 rounded-md  bg-red-50'  : ''}`} > {children} </Link>
          </div>
     );
};

export default Navlink;