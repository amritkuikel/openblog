import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <Skeleton className="relative h-80 w-96 " />

      <div className="pb-2 pt-6">
        <Skeleton className="h-8 w-56" />
      </div>
      <div className=" pb-6 ">
        <Skeleton className="h-6 w-24"/>
      </div>

      <div className="pb-6">
        <Skeleton className="h-6 w-80 pb-2"/>
        <Skeleton className="h-6 w-80 pb-2"/>
        <Skeleton className="h-6 w-80 pb-2"/>
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-14 w-20" />
        <Skeleton className="h-14 w-20" />
      </div>
    </div>
  );
};

export default Loading;
