export const createPriceRange = () => {
  const priceRange = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRange.push(i);
  }

  return priceRange;
};
