import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "Samsung Galaxy M02 with 108 MP Camera",
            description: "this is a Flagship smartphone",
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
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 4,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 5,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 6,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 7,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 8,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 9,
            name: "PRODUCT NAME 2",
            description: "this is a product",
            price: 200,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 10,
            name: "PRODUCT NAME 3",
            description: "this is a product",
            price: 300,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 11,
            name: "PRODUCT NAME 4",
            description: "this is a product",
            price: 400,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 12,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 13,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 14,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 15,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 16,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 17,
            name: "PRODUCT NAME 5",
            description: "this is a product",
            price: 500,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        }
    ],
    product: [],
    cart: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => prod.id === action.payload.id)
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
            console.log(item)
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
            }
        case actionTypes.PRODUCT_DETAILS:
            const details = state.products.find((prod) => prod.id == action.payload.id)
            const inProduct = state.product.find((item) => item.id === action.payload.id ? true : false)
            console.log(details)
            return {
                ...state,
                product: inProduct
                ? state.product.map((details) =>
                    details.id === action.payload.id
                        ? {...details}
                        :null
                    )
                : [...state.product, {details}],
                
            }
        default:
            return state
    }
}

export default shopReducer