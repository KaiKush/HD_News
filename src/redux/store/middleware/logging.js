const loggingMiddleware = store => next => action => {
  const result = next(action);
  // store.getState();
  return result;
};

export default loggingMiddleware;