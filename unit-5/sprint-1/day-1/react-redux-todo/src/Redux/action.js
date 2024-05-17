import * as actionTypes from "./actionType"


export const addTask=(payload)=>{
    return {type:actionTypes.Add_task,payload}
}

export const setValue=(payload)=>{
    return {type:actionTypes.Set_value,payload}
}

export const setComplete=(payload)=>{
    return {type:actionTypes.toggle_Complete,payload}
}

export const deleteTask=(payload)=>{
    return {type:actionTypes.Delete_task,payload}
}

export const setTotal=(payload)=>{
    return {type:actionTypes.set_Total,payload}
}

export const setCompletedCount=(payload)=>{
    // console.log(payload)
    return {type:actionTypes.set_Completed_Count,payload}
}

export const fetchTask=(payload)=>{
    return {type:actionTypes.Fetch_task,payload}
}


export const setTodo=(payload)=>{
    return {type:actionTypes.set_Todo,payload}
}


export const loginf=()=>{
    return {type:actionTypes.login}
}