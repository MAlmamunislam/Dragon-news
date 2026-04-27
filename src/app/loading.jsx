import React from 'react';

const loading = () => {
     return (
         <div class="flex flex-col items-center justify-center min-h-screen bg-base-200">
  <div class="flex flex-col items-center space-y-6">
    
    <div class="relative flex items-center justify-center">
      <div class="absolute w-24 h-24 bg-blue-500/20 rounded-full animate-ping"></div>
      <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div class="absolute">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>
    </div>

    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-800 tracking-widest uppercase">
        Dragon <span class="text-blue-600">News</span>
      </h2>
      <div class="flex items-center justify-center mt-2">
        <span class="loading loading-dots loading-md text-blue-500"></span>
      </div>
    </div>

    <div class="w-64">
      <progress class="progress progress-primary w-full h-1.5"></progress>
      <p class="text-[10px] text-gray-400 mt-2 text-center italic">Bringing you the latest updates...</p>
    </div>
  </div>
</div>
     );
};

export default loading;