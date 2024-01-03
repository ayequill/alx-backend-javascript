const divideFunction = (num, denom) => {
  try {
    if (denom === 0) throw Error();
    return num / denom;
  } catch (_) {
    throw Error('cannot divide by 0');
  }
};

export default divideFunction;
