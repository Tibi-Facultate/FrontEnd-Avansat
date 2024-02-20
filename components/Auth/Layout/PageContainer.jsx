import React from "react";
import { Flex } from "@chakra-ui/react";

import "./Layout.module.css";

export default function PageContainer(props) {
  return (
    <Flex
      bg="secondary.background"
      minHeight="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {props.children}
    </Flex>
  );
}
