import * as actionTypes from "./actionType";

export const LoginRequest=()=>{
    return {type:actionTypes.Login_request}
}

export const LoginSuccess=(payload)=>{
    return {type:actionTypes.Login_success,payload}
}

export const LoginFailure=()=>{
    return {type:actionTypes.Login_failure}
}