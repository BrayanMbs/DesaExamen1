"use client";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function ProductPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange
}: ProductPaginationProps): JSX.Element {
  if (totalItems === 0) {
    return <div className="mt-8" />;
  }

  const firstVisibleItem = (currentPage - 1) * itemsPerPage + 1;
  const lastVisibleItem = Math.min(currentPage * itemsPerPage, totalItems);
  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  return (
    <nav
      className="mt-8 flex flex-col items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-900/70 p-4 shadow-glow sm:flex-row"
      aria-label="Product pagination"
    >
      <div className="text-center text-sm text-slate-300 sm:text-left">
        <p className="font-bold text-white">
          Page {currentPage} of {totalPages}
        </p>
        <p className="mt-1">
          Showing {firstVisibleItem}-{lastVisibleItem} of {totalItems} products
        </p>
      </div>

      <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
        <button
          className="min-h-10 flex-1 rounded-md bg-slate-950 px-4 text-sm font-semibold text-slate-200 ring-1 ring-slate-700 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
          disabled={!canGoBack}
          onClick={() => onPageChange(currentPage - 1)}
          type="button"
        >
          Previous
        </button>

        <button
          className="min-h-10 flex-1 rounded-md bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
          disabled={!canGoForward}
          onClick={() => onPageChange(currentPage + 1)}
          type="button"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
