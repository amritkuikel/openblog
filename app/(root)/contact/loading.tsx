import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="p-10 text-center">
      <div className="pb-6 ">
        <Skeleton className="h-6 w-36" />{" "}
      </div>
      <div className="pb-6">
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
      </div>
      <div className="pb-6">
        <Skeleton className="h-6 w-56" />
      </div>
      <div className="pb-6">
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
      </div>
      <div className="pb-6">
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-56" />
      </div>
    </div>
  );
};

export default Loading;
