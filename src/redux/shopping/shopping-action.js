import * as actionTypes from "./shopping-types";


export const add_to_cart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjust_quantity = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemID,
            quantity: value
        }
    }
}

export const view_details = (itemID) => {
    return {
        type: actionTypes.PRODUCT_DETAILS,
        payload: {
            id: itemID
        }
    }
}