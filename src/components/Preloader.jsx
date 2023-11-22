import { CircularProgress, Center } from "@chakra-ui/react";

function Preloader() {
  return (
    <>
      <Center height="100vh">
        <CircularProgress
          isIndeterminate
          color="black"
          size="120px"
          thickness="4px"
        />
      </Center>
    </>
  );
}

export { Preloader };
