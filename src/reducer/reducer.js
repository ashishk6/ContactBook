const contact = [
  { name: "One", mobile: 123456, address: "Chennai" },
  { name: "Two", mobile: 123456, address: "Chennai" },
  { name: "Three", mobile: 123456, address: "Chennai" },
  { name: "Four", mobile: 123456, address: "Chennai" }
];

function counterReducer(state = contact, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "DELETE_CONTACT":
      state.splice(action.payload, 1);
      return [...state];
    case "EDIT_CONTACT":
      return [...action.payload];
    default:
      return state;
  }
}

export default counterReducer;
