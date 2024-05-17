import { Button, HStack, Select, SimpleGrid, Stack } from "@chakra-ui/react";
import BooksCard from "./BooksCard";
import { useReducer, useEffect, useState } from "react";
import Loading from "./Loading";
import { reducer, initState } from "../../reducers/books/reducer";
import { getApi } from "../../utils/api";

function Books() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const resetFilters = () => {
    setCategoryFilter("");
    setSortCriteria("");
    setSortOrder("");
  };

  useEffect(() => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    getApi(categoryFilter, sortCriteria, sortOrder)
      .then((result) => {
        console.log(result)
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: result });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_DATA_ERROR" });
        throw new Error("invalid action type");
      });
  }, [categoryFilter, sortCriteria, sortOrder]);

  return (
    <Stack>
      <HStack>
        <Select
          data-cy="books_filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">--</option>
          <option value="classic">classic</option>
          <option value="dystopian">dystopian</option>
          <option value="coming_of_age">coming_of_age</option>
          <option value="fantasy">fantasy</option>
          <option value="political_satire">political_satire</option>
          <option value="mystery">mystery</option>
          <option value="epic_poem">epic_poem</option>
        </Select>
        <Select
          data-cy="books_sort"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="">--</option>
          <option value="publication_date">publication_date</option>
          <option value="category">category</option>
        </Select>
        <Select
          data-cy="books_sort_order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by price : Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Button data-cy="reset_all" onClick={resetFilters}>
          RESET ALL
        </Button>
      </HStack>
      {state.loading ? (
        <Loading />
      ) : (
        <SimpleGrid data-cy="books_container" columns={3} spacing={4}>
          {state?.data?.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}

export default Books;
