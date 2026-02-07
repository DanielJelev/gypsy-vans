export function debounce(fn, delay = 300) {
  let timeoutId;

  function debounced(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }

  // Optional helpers (very useful in real apps)
  debounced.cancel = () => {
    clearTimeout(timeoutId);
  };

  debounced.flush = function (...args) {
    clearTimeout(timeoutId);
    fn.apply(this, args);
  };

  return debounced;
}