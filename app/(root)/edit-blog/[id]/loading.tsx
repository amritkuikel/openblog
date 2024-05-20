import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="p-6 ">
      <div className="pb-6 ">
        {" "}
        <Skeleton className="h-8 w-44" />
      </div>
      <div className="pb-12 ">
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-6 w-52" />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6  md:grid-cols-2 xl:grid-cols-3">
        {[1,2,3,4,5,6,7,8,9].map((blog: any) => (
          <div key={blog}>
            <Skeleton className="h-60 w-96"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
