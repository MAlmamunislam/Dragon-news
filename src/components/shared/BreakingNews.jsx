import React from "react";
import Marquee from "react-fast-marquee";
const news = [
  {
    id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    id: "2",
    title: "Tech Industry Sees Huge Growth This Year",
  },
  {
    id: "3",
    title: "Local Team Wins Championship After Thriller",
  },
  {
    id: "4",
    title: "New Education Policy Announced by Government",
  },
  {
    id: "5",
    title: "Scientists Discover Promising Renewable Energy Source",
  },
  {
    id: "6",
    title: "Heavy Rain Causes Traffic Disruptions Across Town",
  },
  {
    id: "7",
    title: "Startup Launches Innovative AI Powered App",
  },
  {
    id: "8",
    title: "International Summit Focuses on Climate Change",
  },
];
const BreakingNews = () => {
  return (
    <div className="container mx-auto flex gap-4 justify-between items-center bg-gray-200">
      <button className="btn bg-red-500">Latest News</button>
      <Marquee pauseOnHover={true}>
        {news.map((n) => (
          <div key={n.id} className="flex items-center mr-12">
            <p>{n.title}</p>
            <span className="mx-4">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
