import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ n }) => {
  return (
    <div class=" py-3 px-4">
      <div class=" mx-auto space-y-8">
        <div class="card bg-base-100 shadow-sm border border-gray-200 rounded-lg overflow-hidden">
          <div class="flex items-center justify-between p-4 bg-slate-200">
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="w-10 rounded-full border">
                  <Image
                    src={n.author?.img}
                    width={40}
                    height={40}
                    alt="author img"
                  ></Image>
                </div>
              </div>
              <div>
                <h2 class="text-sm font-bold text-gray-700">
                  {n.author?.name}{" "}
                </h2>
                <p class="text-xs text-gray-500">{n.author?.published_date}</p>
              </div>
            </div>
            <div class="flex gap-3 text-gray-500">
              <button class="hover:text-blue-500">
                <FaBookmark />
              </button>
              <button class="hover:text-blue-500">
                <FaShareAlt />
              </button>
            </div>
          </div>

          <div class="px-5 pt-4">
            <h1 class="text-xl font-extrabold text-gray-800 leading-snug">
              {n?.title}
            </h1>
          </div>

          <figure class="px-5 py-4">
            <Image
              src={n?.image_url}
              width={700}
              height={120}
              alt=" image_url"
            ></Image>
          </figure>

          <div class="px-5 pb-4">
            <p class="font-semibold text-gray-600 line-clamp-3">{n.details}</p>
            <Link href={`/news/${n._id}`}>
              {" "}
              <button class="text-orange-500 font-bold text-sm mt-2 hover:underline">
                Read More
              </button>{" "}
            </Link>
          </div>

          <div class="divider px-5 my-0"></div>
          <div class="flex items-center justify-between p-5 pt-3 text-gray-500">
            <div class="flex items-center gap-2">
              <div class="rating rating-xs">
                <input
                  type="radio"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <span class="text-sm font-bold">{n.rating.number}</span>
            </div>
            <div class="flex items-center gap-2">
              <FaEye />
              <span class="text-sm font-bold"> {n?.total_view} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
