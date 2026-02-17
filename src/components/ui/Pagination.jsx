export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = getPaginationGroup(currentPage, totalPages);

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {/* Dynamic Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          className={`page-btn ${currentPage === page ? "active" : ""}`}
          disabled={page === "..."}
          onClick={() => page !== "..." && onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

const getPaginationGroup = (currentPage, totalPages) => {
  const span = 2; // Number of neighbors to show on each side
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // Always show first
      i === totalPages || // Always show last
      (i >= currentPage - span && i <= currentPage + span) // Neighbors
    ) {
      pages.push(i);
    } else if (i === currentPage - span - 1 || i === currentPage + span + 1) {
      pages.push("...");
    }
  }

  // Remove duplicate ellipses if they occur
  return pages.filter((item, index) => pages.indexOf(item) === index);
};
