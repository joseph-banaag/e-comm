import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-screen bg-black/70 text-white/50 flex items-center justify-center">
      <h1 className="text-4xl">loading loading...</h1>
    </div>
  );
};

export default LoadingSkeleton;