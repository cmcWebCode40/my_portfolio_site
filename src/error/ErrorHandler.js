export const errorHandler = (error) => {
  if (error?.response) {
    const { response: { data } } = error;
    return { data };
  }
};
