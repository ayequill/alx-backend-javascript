const typeChecker = (type, value, name, msg) => {
  if (type === 'array') {
    if (!Array.isArray(value)) {
      throw new TypeError(`${name} ${msg}`);
    }
    return;
  }
  if (typeof value !== type) {
    throw new TypeError(`${name} ${msg}`);
  }
  return;
};

export default typeChecker;
