export type UUID = string;

export function createUUID() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0].toString();
}
