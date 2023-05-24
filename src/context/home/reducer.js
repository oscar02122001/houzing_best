export const reducer = (state, { type, action }) => {
  switch (type) {
    case "country":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return "Samthing went wrong";
  }
};
