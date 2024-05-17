import { Skeleton, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack data-cy="loading_indicator">
      <Skeleton height="20px" width={"1000px"} />
      <Skeleton height="20px" width={"1000px"} />
      <Skeleton height="20px" width={"1000px"} />
      <Skeleton height="20px" width={"1000px"} />
    </Stack>
  );
};

export default Loading;
