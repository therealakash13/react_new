export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Date.now(), itemName: action.payload.name }];

    case "CLEAR_CART":
      return [];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
