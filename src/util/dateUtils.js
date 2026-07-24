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

export const formatInfoDate = (dateString) => {
  if (!dateString) return '';

  // Standardize string format for cross-browser parsing (replacing space with 'T')
  const date = new Date(dateString.replace(' ', 'T'));
  const now = new Date();

  // Check if the date is today
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  // Format the time (e.g., "7:00 AM")
  const timeStr = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  if (isToday) {
    return `Today, ${timeStr}`;
  }

  // Fallback for non-today dates (e.g., "Jul 24, 7:00 AM")
  const dateStr = date.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
  });

  return `${dateStr}, ${timeStr}`;
}

export const getInitials = (firstName = "", lastName = "") => {
  const firstInitial = firstName.trim().charAt(0).toUpperCase();
  const lastInitial = lastName.trim().charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};
