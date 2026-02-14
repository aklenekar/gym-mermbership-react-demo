/**
 * Converts a date string (YYYY-MM-DD) to "MMM DD, YYYY" (e.g., Jan 15, 2025)
 */
export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  // Check if date is valid to avoid "Invalid Date" errors in UI
  if (isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const getInitials = (firstName = "", lastName = "") => {
  const firstInitial = firstName.trim().charAt(0).toUpperCase();
  const lastInitial = lastName.trim().charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};
