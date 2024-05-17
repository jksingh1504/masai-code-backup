import React from "react";
import { useNavigate } from "react-router-dom";
import SingleShoe from "../Pages/SingleShoe";
import * as action from "../Redux/AuthReducer/action"
import {useSelector,useDispatch} from "react-redux"

const ShoeCard = ({ele}) => {
  let shoeId = null;
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const isAuth=useSelector(store=>store.Authreducer.data.isAuth)

  const tosingleShoe=()=>{
    if(isAuth==false){
      navigate("/login")
    }
    else
    navigate(`/shoes/${ele.id}`)
  }
  // console.log(ele)
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} onClick={()=>{tosingleShoe(ele)}}>
      <div>
        <img data-cy="shoe-card-image" src={ele.image} alt="" style={{width:"100%"}}/>
      </div>
      <div>
        <div data-cy="shoe-name">{ele.name}</div>
        <div data-cy="shoe-category">{ele.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
