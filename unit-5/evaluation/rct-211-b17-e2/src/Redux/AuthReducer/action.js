//Create ActionCreator functions here

import * as actionTypes from "./actionTypes";

export const loginRequest=()=>{
    return {type:actionTypes.LOGIN_REQUEST}
}


export const loginSuccess=(payload)=>{
    return {type:actionTypes.LOGIN_SUCCESS,payload}
}

export const LoginFailure=()=>{
    return {type:actionTypes.LOGIN_FAILURE}
}