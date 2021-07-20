export const initialState = {
    basket: [],
    user: null,
    userNameEntered: null,
}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                //this will be used, in case you have more items to add to basket, but now since a person can only add one product/service at a time, hence the item is not added but replaced.
                // basket: [...state.basket, action.item],
                basket: [action.item]
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        case "REMOVE_FROM_BASKET":
            {
                let index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id);

                let newBasket = [...state.basket];

                (index >= 0) ? (newBasket.splice(index, 1)) : (console.warn(`Can't remove product id (${action.id}) as it is not in basket`));

                return {
                    ...state,
                    basket: newBasket,
                };
            }
        case "TOGGLE_PAUSE_SUBS_BASKET":
            {
                let modBasket = [...state.basket];
                modBasket[0].paused = action.paused;
                return {
                    ...state,
                    basket: modBasket,
                };
            }
        case "ADD_PRICE":
            {
                let modBasket = [...state.basket];
              //  console.log('Price Added > ', action.price);
                modBasket[0].price = action.price;
              //  console.log('modBasket ', modBasket);
                return {
                    ...state,
                    basket: modBasket,
                };
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_USER_NAME":
            return {
                ...state,
                userNameEntered: action.userNameEntered
            }
        default:
            return state;
    }
}

export default reducer;