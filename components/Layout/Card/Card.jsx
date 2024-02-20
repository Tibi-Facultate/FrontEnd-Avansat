import React from "react";
import { Box, Stack, Button, Select, Heading } from "@chakra-ui/react";

import "./Card.module.css";

export default function Card({
  title = "",
  subtitle = "",
  primaryAction = null,
  secondaryActions = null,
  filterActions = null,
  bg = "secondary.card",
  color = "card.100",
  children,
}) {
  let actions = [];

  if (primaryAction) {
    actions.push(
      <Button
        key="0"
        onClick={primaryAction.onClick}
        colorScheme="main"
        size="sm"
      >
        {primaryAction.content}
      </Button>
    );
  }
  if (secondaryActions) {
    actions.push(
      secondaryActions.map((action, i) => (
        <Button
          key={i}
          onClick={action.onClick}
          colorScheme="main"
          variant="outline"
          size="sm"
        >
          {action.content}
        </Button>
      ))
    );
  }

  if (filterActions) {
    actions.push(
      filterActions.map((action, i) => (
        <Select variant="outline" key={i} onChange={action.onClick} size="sm">
          {Object.keys(action.items).map((value, index) => (
            <option
              key={index}
              selected={action.default === value}
              value={value}
            >
              {action.items[value]}
            </option>
          ))}
        </Select>
      ))
    );
  }

  const header =
    title || subtitle || actions.length > 0 ? (
      <Stack direction="row" alignItems="top" marginBottom="1.5rem">
        <Stack>
          <Heading size="md">{title}</Heading>
          <Heading size="xs" color="card.100">
            {subtitle}
          </Heading>
        </Stack>
        <Stack direction={["column", "row"]} style={{ marginLeft: "auto" }}>
          {actions}
        </Stack>
      </Stack>
    ) : (
      ""
    );
  return (
    <Box width="100%" bg={bg} color={color} rounded="lg" p={5}>
      {header}
      <Box>{children}</Box>
    </Box>
  );
}
