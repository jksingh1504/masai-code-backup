export const initState = {
  loading: false,
  data: [],
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING": {
      return { ...state, loading: true, error: false };
    }
    case "FETCH_DATA_SUCCESS": {
      console.log(action.payload,"hello")
      return { ...state, loading: false, data: action.payload, error: false };
    }
    case "FETCH_DATA_ERROR": {
      return { ...state, loading: false, error: true };
    }
    default:
      throw new Error("invalid action type");
  }
};
