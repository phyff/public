export default (callback, delay, condition) => {
  let previousCall = new Date().getTime();
  return (...args) => {
    const time = new Date().getTime();

    if ((time - previousCall) >= delay || condition(...args)) {
      previousCall = time;
      callback(...args);
    }
  };
};
