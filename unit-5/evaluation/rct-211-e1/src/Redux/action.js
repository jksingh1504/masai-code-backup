//Create ActionCreator functions here
import * as actionTypes from "./actionTypes"

export const getShoesRequest=()=>{
    return {type:actionTypes.GET_SHOES_REQUEST}
}

export const getShoesSuccess=(payload)=>{
    return {type:actionTypes.GET_SHOES_SUCCESS,payload}
}


export const getShoesFailure=()=>{
    return {type:actionTypes.GET_SHOES_FAILURE}
}

export const updateShoeCountRequest=()=>{
    return {type:actionTypes.UPDATE_SHOE_COUNT_REQUEST}
}


export const updateShoeCountSuccess=(payload)=>{
    return {type:actionTypes.UPDATE_SHOE_COUNT_SUCCESS,payload}
}

export const updateShoeCountFailure=(payload)=>{
    return {type:actionTypes.UPDATE_SHOE_COUNT_FAILURE,payload}
}