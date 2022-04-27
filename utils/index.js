// utility functions

// check if array is empty
export const isEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0;
};

// return fetcher for swr
export const fetcher = (url) => fetch(url).then((res) => res.json());
