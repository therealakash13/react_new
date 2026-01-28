export const calculateTotals = (state) => {
  const totalItems = state.items.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  const totalPrice = state.items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  return { ...state, totalItems, totalPrice };
};
