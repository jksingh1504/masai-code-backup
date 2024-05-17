import React from "react";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getData } from "../Redux/AppReducer/action";
import {useDispatch,useSelector} from "react-redux";
import ShoeCard from "../Components/ShoeCard"


const Shoes = () => {
  const shoes=useSelector(store=>store.reducer.shoes)
  const dispatch=useDispatch();
  

  useEffect(()=>{
    dispatch(getData)    
  },[])

  


  return (
    <div style={{display:"flex",gap:'100px'}}>
      <Filter />
      <div style={{border:"1px solid black",width:"80%",margin:"auto",display:'grid', gap:'20px',gridTemplateColumns:"repeat(3,1fr)"}}>
        {/* Map through the shoes list here using ShoeCard Component */
          shoes.map((ele)=>
            <ShoeCard key={ele.id} ele={ele}/>
          )
        }
      </div>
    </div>
  );
};

export default Shoes;
