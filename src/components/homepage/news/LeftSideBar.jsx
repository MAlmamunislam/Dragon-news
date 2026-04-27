import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <ul className="flex flex-col gap-3 mt-3.5">
      {categories.news_category.map((categorie) => (
        <li
          key={categorie.category_id}
          className={`
          ${activeId === categorie.category_id ? " bg-purple-500 text-white" : ""}
               rounded-md text-center  text-gray-600  text-xl`}
        >
          <Link className="block p-2" href={`/category/${categorie.category_id}`}>
            {categorie.category_name}
          </Link>
        </li>
      ))}
    </ul> 
  );
};

export default LeftSideBar;
