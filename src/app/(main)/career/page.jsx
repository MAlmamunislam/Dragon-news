import React from 'react';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-500">
            আমাদের সাথে গড়ুন <br /> আপনার ভবিষ্যৎ
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            আমরা শুধু কর্মী খুঁজি না, আমরা খুঁজি স্বপ্নদ্রষ্টা। আপনি কি তৈরি আমাদের টিমের সাথে অসাধারণ কিছু তৈরি করতে?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#jobs" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105">ওপেন পজিশন দেখুন</a>
            <a href="#" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all backdrop-blur-md">আমাদের কালচার</a>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">দ্রুত বৃদ্ধি</h3>
            <p className="text-slate-400">আপনার ক্যারিয়ারের গ্রোথ হবে রকেটের গতিতে।</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.651 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.651-1M12 16V15"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">সেরা স্যালারি</h3>
            <p className="text-slate-400">মার্কেট স্ট্যান্ডার্ড অনুযায়ী আকর্ষণীয় বেতন ও বোনাস।</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">রিমোট কাজের সুবিধা</h3>
            <p className="text-slate-400">পৃথিবীর যেকোনো প্রান্ত থেকে আমাদের সাথে কাজ করুন।</p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="jobs" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">বর্তমান নিয়োগসমূহ</h2>
              <p className="text-slate-400">আপনার স্কিল অনুযায়ী পজিশন বেছে নিন</p>
            </div>
            <span className="px-4 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium">৫টি পজিশন খালি</span>
          </div>

          {/* Job Item 1 */}
          <div className="group relative p-6 mb-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">Senior React Developer</h4>
                <div className="flex gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1">রিমোট</span>
                  <span className="flex items-center gap-1">ফুল-টাইম</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-blue-600 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Apply Now</button>
            </div>
          </div>

          {/* Job Item 2 */}
          <div className="group relative p-6 mb-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">UI/UX Designer</h4>
                <div className="flex gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1">ঢাকা, বাংলাদেশ</span>
                  <span className="flex items-center gap-1">ফুল-টাইম</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-purple-600 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Apply Now</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CareerPage;