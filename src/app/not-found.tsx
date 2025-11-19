import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-green-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/80">
            Error
          </p>
          <h1 className="text-7xl font-black mt-2">404</h1>
          <p className="mt-4 text-xl font-medium text-white">
            We lost the page you were looking for
          </p>
        </div>
        <div className="px-8 py-10 space-y-6 text-center">
          <p className="text-gray-600 text-lg">
            The content might have been moved, renamed, or it never existed.
            Let&apos;s get you back on track with one of the options below.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded-2xl bg-gray-50">
              <p className="font-semibold text-gray-900">Browse catalog</p>
              <p className="text-sm text-gray-500">
                Explore all of our latest arrivals and deals.
              </p>
            </div>
            <div className="p-4 border rounded-2xl bg-gray-50">
              <p className="font-semibold text-gray-900">Need support?</p>
              <p className="text-sm text-gray-500">
                Reach out and we&apos;ll guide you the rest of the way.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex justify-center items-center rounded-full bg-green-600 text-white px-8 py-3 font-semibold hover:bg-green-700 transition-colors">
              Back to home
            </Link>
            <Link
              href="/product"
              className="inline-flex justify-center items-center rounded-full border border-green-200 text-green-700 px-8 py-3 font-semibold hover:bg-green-50 transition-colors">
              Shop products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
