import React from "react";

const MainLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900/30 " />

      <div className="relative flex flex-row items-center gap-3 bg-transparent">
        <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce" />
        <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.3s]" />
        <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.5s]" />
      </div>
    </div>
  );
};

export default MainLoader;
