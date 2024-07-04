"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
export default function News() {
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2024-06-30&to=2024-06-30&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        console.log(data.articles);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div className="container mx-auto ">
      <div className=" p-10 rounded-3xl bg-slate-900 border border-white/10 container mx-auto">
        <div className="text-center font-extrabold text-5xl my-3 mb-10 text-indigo-400">
          Explore
        </div>

        {isLoaded === false ? (
          <div className="text-center text-white w-full flex justify-center">
            {/* <VscLoading className="animate-spin text-3xl " /> */}
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-5">
            {news.map((article) => (
              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(${article.urlToImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="card hover:scale-105 transition-all p-5 rounded-xl "
              >
                <div className="title  font-extrabold text-white">
                  {article.title}
                </div>
                <br />
                <div className="text-white/80">{article.content}</div>
                <br />
                <div className="flex justify-between">
                  <div className="text-white/60 text-wrap">
                    ~{article.author}
                  </div>
                </div>
                <Link target="_blank" href={article.url}>
                  <button className="bg-gradient-to-tr text-white border-opacity-20 border-white p-3  my-3 from-gray-950 to-gray-900 border rounded-lg">
                    Read more -&gt;
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
