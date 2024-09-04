export type Timestamp = number;

export function formatDate(timestamp: Timestamp) {
  return new Date(timestamp).toLocaleDateString();
}

export function formatTime(timestamp: Timestamp) {
  return new Date(timestamp).toLocaleTimeString();
}

export function formatDateTime(timestamp: Timestamp) {
  return `${formatDate(timestamp)} ${formatTime(timestamp)}`;
}
