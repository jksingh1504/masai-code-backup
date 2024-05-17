export const loadData=(kye)=>{
    try{
        let data=JSON.parse(localStorage.getItem(kye))
        return data;
    }
    catch{
        return undefined
    }
}


export const uploadData=(kye,value)=>{

    localStorage.setItem(kye,JSON.stringify(value))
    
}