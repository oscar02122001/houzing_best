export const reducer = (state, { type, action }) => {
  switch (type) {
    case "plus":
      return "Working..";
    default:
      return console.log("No data");
  }
};
