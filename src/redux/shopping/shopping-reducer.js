import * as actionTypes from "./shopping-types";
import image from '../../assets/images/ttt.png'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "PRODUCT NAME 1",
            description: "this is a product",
            price: 100,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 2,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 3,
            name: "PRODUCT NAME 3",
            description: "this is a product",
            price: 300,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 4,
            name: "PRODUCT NAME 4",
            description: "this is a product",
            price: 400,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 5,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        }
    ],
    cart: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id)
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                : [...state.cart, { ...item, qty: 1 }],
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: +action.payload.qty }
                    : item
                ),
            };
        default:
            return state
    }
}

export default shopReducer