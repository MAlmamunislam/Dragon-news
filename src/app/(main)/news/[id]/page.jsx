import { getNewsDetailsieById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsDetailsPage =async ({params}) => {
     const {id} = await params;
     const news = await getNewsDetailsieById(id);
     console.log(news)
     // console.log(id)
     return (
         <div class="bg-gray-50 min-h-screen py-10 px-4">
  <div class="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    
    <figure class="mb-6">
     <Image src={news.image_url} width={700} height={150} alt={news.title} className='w-full' ></Image>
    </figure>

    <h1 class="text-3xl font-extrabold text-gray-800 leading-tight mb-6">
     {news.title}
    </h1>

    <div class="space-y-4 text-gray-600 leading-relaxed text-base">
      {news.details}
    </div>

    <div class="mt-10">
    <Link href={`/category/${news.category_id}`} >   <button  class="btn bg-[#D72050] hover:bg-[#b01a42] text-white border-none rounded-none px-6 flex items-center gap-2 capitalize text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        All news in this category
      </button> </Link>
    </div>

  </div>
</div>
     );
};

export default NewsDetailsPage;