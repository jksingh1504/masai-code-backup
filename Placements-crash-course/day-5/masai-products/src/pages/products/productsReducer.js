export const initState = {
    loading: false,
    err: false,
    res: {},
  };
  
  // The above is the initial state of the reducer. Don't rename/edit it
  
  export const productsReducer = (state, action) => {
    
    switch(action.type) {
      case "LOADING" :
         return{
        loading: true,
        err : false,
        res : {},
      };
      case "SUCCESS" : 
      
      return {
        
        loading: false,
        err : false,
        res : action.payload,
      };
      case "ERROR" :
        return{
        loading: false,
        err : true,
        res : {},
        
      };
      default:{
      throw new Error("invalid action type")
      }

    }
  };
  