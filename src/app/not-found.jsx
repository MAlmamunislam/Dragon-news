import Link from 'next/link';
import React from 'react';

const notFound = () => {
     return (
 <div class="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
  <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    
    <div class="relative backdrop-blur-md bg-white/10 border border-white/20 p-12 rounded-3xl shadow-2xl text-center">
      <h1 class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        404
      </h1>
      
      <h2 class="mt-4 text-2xl font-semibold text-white">
        Oops! Page Not Found
      </h2>
      
      <p class="mt-4 text-gray-400">
        Tumi jeta khujcho seta hoyto onno kothao chole geche ba ashol-e chilo e na.
      </p>

      <div class="mt-8">
        <Link href="/" class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/25">
          Back to Home
        </Link>
      </div>
    </div>
  </div>
</div>
     );
};

export default notFound;