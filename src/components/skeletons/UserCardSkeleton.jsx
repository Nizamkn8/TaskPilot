import React from "react";

const UserCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Name placeholder */}
      <div className="mb-3 h-4 w-3/4 rounded bg-gray-200"></div>

      {/* Email placeholder */}
      <div className="mb-4 h-3 w-full rounded bg-gray-200"></div>

      {/* Button placeholder */}
      <div className="h-9 w-32 rounded-lg bg-gray-200"></div>
    </div>
  );
};

export default UserCardSkeleton;
