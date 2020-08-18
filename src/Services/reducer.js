export const initialState = {
  basket: [
    {

      id: "12321341",
      title: "Honeybee Gardens 'Skinny Dip' Refillable Eye Shadow Palette : Natural Ingredients : Gluten Free, Vegan, Paraben Free",
      price: 27.99,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/41xecyG-lbL.jpg",
      link: "https://www.amazon.com/Honeybee-Gardens-Skinny-Refillable-Palette/dp/B078P1QF2C/ref=sr_1_89?dchild=1&keywords=vegan+makeup&qid=1597628877&sr=8-89"
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket
      return { state }

    default:
      return state;
  }
}
export default reducer;

//