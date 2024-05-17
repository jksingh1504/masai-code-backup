// manage api requests here
import axios from "axios";
export const getApi = async (categoryFilter, sortCriteria, sortOrder) => {
  console.log(categoryFilter, sortCriteria, sortOrder);
  let url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`;
  if (categoryFilter && sortCriteria && sortOrder) {
    url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?category=${categoryFilter}&_sort=${sortCriteria}&_order=${sortOrder}`;
  } else if (categoryFilter) {
    url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?category=${categoryFilter}`;
  } else if (sortCriteria && sortOrder) {
    url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?&_sort=${sortCriteria}&_order=${sortOrder}`;
  }
  try {
    // console.log(url);
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};