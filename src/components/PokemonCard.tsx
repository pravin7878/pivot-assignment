"use client";

import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Key } from "lucide-react";

export default function PokemonCard(props) {
  
  const Item = props?.held_items?.map((item)=>item)
  const getItemName = Item?.map(i=>i.item.name)
  
  return (
     <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={props?.sprites?.front_default}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {props?.name}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         weight : {props?.weight}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400"> 
           height : {props?.height}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400"> 
           items : { getItemName?.map((name , ind)=>(<span key={ind} >{name}</span>))};


        </p>
        
      </BackgroundGradient>
    </div>
  )
}





