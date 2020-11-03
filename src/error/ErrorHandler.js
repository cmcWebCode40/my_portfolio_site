export const errorHandler = (error) => {
  if (error && error.response) {
    const { response: { data } } = error;
    return { data };
  }
};
