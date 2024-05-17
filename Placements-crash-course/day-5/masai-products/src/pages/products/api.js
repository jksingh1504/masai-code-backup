import axios from "axios";

 
export async function fetchProducts({page,sort,order,filter}) {

    
    let productUrl = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=6&sort=${sort}&order=${order}&filter=${filter}`;
    return await axios.get(productUrl);


};

// export async function fetchProducts() {

//     let productUrl = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=6`;
//     return await axios.get(productUrl);


// };
