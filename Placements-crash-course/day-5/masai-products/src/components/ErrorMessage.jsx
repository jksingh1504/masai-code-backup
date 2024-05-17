import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function ErrorMessage() {
  return <>

<Alert data-cy="error" status="error"> 
<AlertIcon />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong, Please refresh</AlertDescription>
</Alert>





  </>;
}

export default ErrorMessage;
