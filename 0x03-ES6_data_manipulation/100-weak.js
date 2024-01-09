export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const current = weakMap.get(endpoint) + 1;

  weakMap.set(endpoint, current);

  if (current >= 5) {
    throw new Error('Endpoint load is high');
  }
};
