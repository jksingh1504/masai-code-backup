import * as actionTypes from "./actionTypes"


const initialState = {
	countries: [],
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

  switch(type){

    case actionTypes.GET_COUNTRIES_REQUEST:
      return {...state,
        isLoading:true,
        isError:false
      }

    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries:payload,
        isLoading:false,
        isError:false
      }

    case actionTypes.GET_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true
      }

    case actionTypes.UPDATE_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading:true,
        isError:false
      }

    case actionTypes.UPDATE_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading:false,
        isError:false,
        countries:payload
      }

    case actionTypes.UPDATE_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true,
      }

      case actionTypes.DELETE_COUNTRY_REQUEST:
        return {
          ...state,
          isLoading:true,
          isError:false
        }
  
      case actionTypes.DELETE_COUNTRY_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isError:false,
          countries:payload
        }
  
      case actionTypes.DELETE_COUNTRY_FAILURE:
        return {
          ...state,
          isLoading:false,
          isError:true,
        }

    default:
      return state
  }
	
};
