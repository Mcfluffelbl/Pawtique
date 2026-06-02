import { useState } from "react";

export function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    items.length / itemsPerPage
  );

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = items.slice(start, end);

  return {
    currentPage,
    totalPages,
    currentItems,
    nextPage: () =>
      setCurrentPage((p) => Math.min(p + 1, totalPages)),
    previousPage: () =>
      setCurrentPage((p) => Math.max(p - 1, 1)),
  };
}