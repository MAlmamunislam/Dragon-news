import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";

import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategorries, getNewsCategorrieById } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategorries();
  const news = await getNewsCategorrieById(id);
  // console.log(id)
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto my-5 ">
      {/* 1st */}
      <div className="col-span-1 ">
        <h2 className="  text-xl font-bold">All Caterogy</h2>
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      {/* 2nd */}
      <div className=" col-span-2">
        All news
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => <NewsCard n={n} key={n._id}></NewsCard>)
          ) : (
            <h1 className="flex text-3xl font-bold text-red-500 items-center justify-center mt-50">
              {" "}
              No Data Found Today{" "}
            </h1>
          )}
        </div>
      </div>
      {/* 3rd */}
      <div className="bg-yellow-100 col-span-1">
        <RightSidebar></RightSidebar>{" "}
      </div>
    </div>
  );
};

export default NewsCategoryPage;
