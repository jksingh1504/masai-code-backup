import { Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
function LoadingSkeleton() {
  return (
    <Stack data-cy="loading-indicator" spacing="24px" m="auto" w="80%">
      {/* Add chakra-ui Skeleton components here */}

      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
}

export default LoadingSkeleton;
