import { Button, Heading, Select } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>Submit</Button>
      <Heading>Hello</Heading>
    </>
  );
};

export default Home;
