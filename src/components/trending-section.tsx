"use client";

import React from "react";
import Container from "./container";
import AnimeCard from "./anime-card";

import { useGetTrendingAnime } from "@/query/get-trending-anime";
import BlurFade from "./ui/blur-fade";

const TrendingSection = () => {
  const { data, isLoading } = useGetTrendingAnime();
  if (isLoading) return <LoadingSkeleton />;
  return (
    <Container className="flex flex-col gap-5 py-10 items-center lg:items-start ">
      <h5 className="text-2xl font-bold">Trending Anime</h5>
      <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 w-full gap-5 content-center">
        {data?.results.map((anime, idx) => (
          <BlurFade key={idx} delay={idx * 0.05} inView>
            <AnimeCard
              anime={anime}
              className="self-center justify-self-center"
              showGenre={false}
            />
          </BlurFade>
        ))}
      </div>
    </Container>
  );
};

const LoadingSkeleton = () => {
  return (
    <Container className="flex flex-col gap-5 py-10 items-center lg:items-start ">
      <div className="h-10 w-[15.625rem] animate-pulse bg-slate-700"></div>
      <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 w-full gap-5 content-center">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, idx) => {
          return (
            <div
              key={idx}
              className="rounded-xl h-[15.625rem] min-w-[10.625rem] max-w-[12.625rem] md:h-[18.75rem] md:max-w-[12.5rem] animate-pulse bg-slate-700"
            ></div>
          );
        })}
      </div>
    </Container>
  );
};

export default TrendingSection;

