export const validateProductData = (
  title: string,
  description: string,
  image: string
): boolean => {
  if (!title || !description || !image) return false;
  if (title.length < 3 || description.length < 10) return false;
  return true;
};
