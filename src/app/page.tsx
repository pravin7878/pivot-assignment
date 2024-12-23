"use client";
import { useState } from "react";
import PokedexGrid from "@/components/PokedexGrid";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Home() {
// bg-gradient-to-r
  return (
<div className="flex flex-col items-center m-5 border-2 py-10 border-red-500  from-red-100 via-white to-red-100 bg-black shadow-lg rounded-lg gap-6">
      {/* Title */}
      <h1 className="text-red-600 text-4xl font-extrabold uppercase tracking-wide drop-shadow-md">
        Pokemon Web Application
      </h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
      
      <PokedexGrid />
    </div>
      
  );
}
