import { useState } from "react";

// Custom hook for pagination (Splits a list of items into pages + Handles next/previous page logic)
export function usePagination(items, itemsPerPage) {
  // Track wich page the user is currently on
  const [currentPage, setCurrentPage] = useState(1);

  // Calculates total number of pages based on items lenght
  const totalPages = Math.ceil(
    items.length / itemsPerPage
  );

  // Calculates where to start slicing the array 
  const start = (currentPage - 1) * itemsPerPage;

  // Calculates where to end slicing the array
  const end = start + itemsPerPage;

  // Extracts only the items for the current page
  const currentItems = items.slice(start, end);

  return {
    currentPage,
    totalPages,
    currentItems,

    // Moves to next page but never exceeds totalPages
    nextPage: () =>
      setCurrentPage((p) => Math.min(p + 1, totalPages)),
    
    // Moves to previous page but never goes below page 1
    previousPage: () =>
      setCurrentPage((p) => Math.max(p - 1, 1)),
  };
}