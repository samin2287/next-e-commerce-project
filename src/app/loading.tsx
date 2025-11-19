import React from "react";

const skeletonCards = Array.from({ length: 8 });

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-green-50 flex flex-col items-center justify-center px-6 py-16 gap-10">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-green-600">
          Please wait
        </p>
        <h1 className="text-3xl font-bold text-gray-900">
          Preparing your experience
        </h1>
        <p className="text-gray-500 max-w-xl">
          We&apos;re loading the freshest products and deals for you. This will
          only take a moment.
        </p>
      </div>

      <div className="relative h-2 w-48 overflow-hidden rounded-full bg-gray-200">
        <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingPage;
