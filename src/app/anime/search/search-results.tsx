"use client";

import React from "react";
import { ROUTES } from "@/constants/routes";
import AnimeCard from "@/components/anime-card";

import BlurFade from "@/components/ui/blur-fade";
import { useSearchAnime } from "@/query/search-anime";
import { redirect, useSearchParams } from "next/navigation";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchPhrase = searchParams.get("search-key") as string;
  const { data: searchResults, isLoading } = useSearchAnime(searchPhrase);

  if (!searchPhrase) redirect(ROUTES.HOME);
  return (
    <div className="flex flex-col gap-10 mt-28 lg:mt-36 pb-20">
      <div className="text-2xl font-semibold">
        Search Results for <span className="font-[800]">{searchPhrase}</span>
      </div>
      {isLoading && (
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
      )}
      <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 w-full gap-5 content-center">
        {searchResults?.results.map((anime, idx) => (
          <BlurFade key={idx} delay={idx * 0.05} inView>
            <AnimeCard
              anime={anime}
              className="self-center justify-self-center"
              showGenre={false}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

