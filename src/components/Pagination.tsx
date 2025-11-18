"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Props {
  page: number;
  totalPages: number;
  limit: number;
}

function useQueryNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const pushPage = (p: number, limit: number) => {
    const params = new URLSearchParams(Array.from(searchParams?.entries() || []));
    params.set("page", String(p));
    params.set("limit", String(limit));
    const path = pathname ?? "/";
    router.push(`${path}?${params.toString()}`);
  };

  return { pushPage };
}

function createPageRange(current: number, total: number, siblingCount = 1) {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (total <= totalPageNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblingCount, 2);
  const rightSiblingIndex = Math.min(current + siblingCount, total - 1);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < total - 1;

  const pages: (number | string)[] = [];
  pages.push(1);

  if (showLeftEllipsis) {
    pages.push("left-ellipsis");
  } else {
    for (let i = 2; i < leftSiblingIndex; i++) pages.push(i);
  }

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);

  if (showRightEllipsis) {
    pages.push("right-ellipsis");
  } else {
    for (let i = rightSiblingIndex + 1; i < total; i++) pages.push(i);
  }

  pages.push(total);
  return pages;
}

export default function Pagination({ page, totalPages, limit }: Props) {
  const { pushPage } = useQueryNavigation();

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    pushPage(p, limit);
  };

  const desktopPages = createPageRange(page, totalPages, 1);

  return (
    <div className="flex flex-col items-center gap-3 mt-5">
      {/* Mobile / small screens: compact controls */}
      <div className="flex items-center gap-2 sm:hidden">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50">
          Prev
        </button>

        <div className="px-3 py-1 border rounded">Page {page} / {totalPages}</div>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50">
          Next
        </button>
      </div>

      {/* Desktop / larger screens: full pagination with numbers and ellipses */}
      <div className="hidden sm:flex items-center gap-2">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50">
          Prev
        </button>

        {desktopPages.map((item, idx) =>
          typeof item === "number" ? (
            <button
              key={idx}
              onClick={() => goToPage(item)}
              aria-current={page === item}
              className={`px-3 py-1 border rounded ${
                page === item ? "bg-green-700 text-white" : ""
              }`}>
              {item}
            </button>
          ) : (
            <span key={idx} className="px-3 py-1">
              …
            </span>
          )
        )}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
}
