import { RecipeList } from "../Components/RecipeList";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipe } from "../Redux/RecipeReducer/action";
import { useEffect } from "react";

export const Homepage = () => {
  const dispatch = useDispatch();
  const [searchparam, setSearchparam] = useSearchParams({});
  const urlCategory = searchparam.getAll("category");
  const urlType = searchparam.getAll("type");
  const urlOrder = searchparam.getAll("order");

  useEffect(() => {
    const APIparams = {};
    const URLparams = {};
    if (urlCategory.length) {
      APIparams.category = urlCategory;
      URLparams.category = urlCategory;
    }
    if (urlType.length) {
      APIparams.type = urlType;
      URLparams.type = urlType;
    }
    if (urlOrder.length) {
      APIparams._order = urlOrder[0];
      APIparams._sort = "price";
      URLparams.order = urlOrder;
    }
    setSearchparam(URLparams);
    dispatch(getRecipe({ params: APIparams }));
  }, [searchparam]);
  return (
    <DIV>
      <Sidebar />
      <RecipeList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
