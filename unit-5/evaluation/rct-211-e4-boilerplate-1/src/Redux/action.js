import * as actionTypes from "./actionTypes"

export const countyRequest=()=>{
    return {type:actionTypes.GET_COUNTRIES_REQUEST}
}

export const countrySuccess=(payload)=>{
    return {type:actionTypes.GET_COUNTRIES_SUCCESS,payload}
}


export const countryFailure=()=>{
    return {type:actionTypes.GET_COUNTRIES_FAILURE}
}


export const updateRequest=()=>{
    return {type:actionTypes.UPDATE_COUNTRY_REQUEST}
}

export const updateSuccess=(payload)=>{
    return {type:actionTypes.UPDATE_COUNTRY_SUCCESS,payload}
}

export const updateFailure=()=>{
    return {type:actionTypes.UPDATE_COUNTRY_FAILURE}
}

export const deleteRequest=()=>{
    return {type:actionTypes.DELETE_COUNTRY_REQUEST}
}

export const deleteSuccess=(payload)=>{
    return {type:actionTypes.DELETE_COUNTRY_SUCCESS,payload}
}

export const deleteFailure=()=>{
    return {type:actionTypes.DELETE_COUNTRY_FAILURE}
}