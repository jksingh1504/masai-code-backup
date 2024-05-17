import axios from "axios";

export async function  getLogin(email,password){
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login`;
    
    try {
        let res = await axios.post(url, {
          email,
          password,
        });
  
      return res.data.token;
   
  
      } catch (e) {
         return e.response.data.message
      }
    
}