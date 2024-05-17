import React, { useEffect } from "react";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { BookList } from "../Components/BookList";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";

export const Homepage = () => {
  const [searchparam, setSearchparam] = useSearchParams();
  const urlCategory = searchparam.getAll("category");
  const urlOrder = searchparam.getAll("order");
  const dispatch = useDispatch();
  useEffect(() => {
    const URLFileterObj = {};
    if (urlCategory.length) {
      URLFileterObj.category = urlCategory;
    }
    if (urlOrder.length) {
      URLFileterObj._order = urlOrder[0];
      URLFileterObj._sort = "release_year";
    }
    dispatch(getBooks({ params: URLFileterObj }));
  }, []);
  return (
    <DIV>
      <Sidebar />
      <BookList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
