export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            action.item.isChecked = true;
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
        case 'DESELECT_ALL':
            return {
                ...state,
                basket: [],
            };
            
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`);
            }
            return {
                ...state,
                basket: newBasket,
            };

        case 'UPDATE_CHECKBOX':
            let newBasket1 = [...state.basket];
            const index1 = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index1 >= 0) {
                newBasket1[index1].isChecked = action.isChecked;
            } else {
                console.warn(`Can't update product (id: ${action.id}) as it's not in basket!`);
            }
            return {
                ...state,
                basket: newBasket1,
            };
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
            
        default:
            return state;
    }
}

export default reducer;