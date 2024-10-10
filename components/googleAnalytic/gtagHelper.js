import "client-only";

export function getLocalStorage(key, defaultValue) {
  const stickyValue = localStorage.getItem(key);

  console.log("sticky value ===========>>>>>>>>", stickyValue);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key, value) {
  console.log("set local storage ===========>>>>>> ", key, value);
  localStorage.setItem(key, JSON.stringify(value));
}
