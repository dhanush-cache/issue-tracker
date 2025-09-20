import { Skeleton } from "@radix-ui/themes";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <div>
      <Skeleton width="35rem" height="2rem" className="mb-5" />
      <Skeleton width="35rem" height="20rem" className="mb-5" />
    </div>
  );
};
export default IssueFormSkeleton;
