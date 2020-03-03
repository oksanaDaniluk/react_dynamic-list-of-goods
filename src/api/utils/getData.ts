export const getData = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(response => response.json());
};
