import React from "react";
import {
  Flex,
  Container,
  Image,
  Stack,
  Link,
  Text,
  Icon,
  Button,
  Menu,
  MenuItem,
  MenuDivider,
  MenuGroup,
  MenuList,
  MenuButton,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";

import { FaCog, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";

import "./Nav.module.css";
import {useSelector} from "react-redux";

export default function Nav() {
  const { toggleColorMode, colorMode } = useColorMode();
  const isAllowed = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Flex
      position={{ md: "fixed" }}
      bg="navItem.700"
      minH="4rem"
      w="100%"
      marginTop={{ md: "-4rem" }}
      zIndex="99"
    >
      <Container maxW="container.lg" paddingTop="5px">
        <Stack
          direction={["column", "row"]}
          alignItems={["flex-end", "center"]}
        >
          <Image
            boxSize="54px"
            fallbackSrc="./images/logo.png"
          />
          <Text fontSize="xl" fontWeight="500">
            Front-End Avansat
          </Text>
          <Stack direction={["column", "row"]} style={{ marginLeft: "5rem" }}>
            <Button colorScheme="navItem" variant="ghost" _hover={{ backgroundColor: 'card.300' }}  _active={{ backgroundColor: 'card.300' }}>
              <Link href="/" style={{textDecoration: 'none'}}>
                Dashboard
              </Link>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="navItem"
                variant="ghost"
                rightIcon={<Icon as={FaChevronDown} color="navItem.500" />}
                _hover={{ backgroundColor: 'card.300' }}
                _active={{ backgroundColor: 'card.300' }}
              >
                Users
              </MenuButton>
              <MenuList>
                <MenuItem>View All (not working) </MenuItem>
                <MenuDivider />
                <MenuItem>Add New (not working) </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Stack direction={["column", "row"]} style={{ marginLeft: "auto" }}>
            <Menu>
              <IconButton
                  rounded="full"
                  paddingLeft = "5%"
                  paddingRight ="5%"
                  onClick={toggleColorMode}
                  icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
                  aria-label = "Toggle theme"/>
              <MenuButton
                as={Button}
                colorScheme="navItem"
                variant="ghost"
                rightIcon={<Icon as={FaCog} color="navItem.500" />}
                _hover={{ backgroundColor: 'card.300' }}
                _active={{ backgroundColor: 'card.300' }}
              >
                Settings
              </MenuButton>
              <MenuList>
                  {
                    (() => {
                      if(isAllowed) {
                        return (
                            <MenuGroup title="Profile">
                              <Link href="/profile" style={{textDecoration: 'none'}}>
                                  <MenuItem>My Account</MenuItem>
                              </Link>
                              <MenuItem>Payments (not working) </MenuItem>
                              <Link style={{textDecoration: 'none'}}>
                                <MenuItem color="red" onClick={() => {
                                  window.location.href = "/logout";
                                }}>Log out</MenuItem>
                              </Link>
                            </MenuGroup>
                        );
                      } else {
                        return (
                          <MenuGroup title="Profile">
                            <Link href="/login" style={{textDecoration: 'none'}}>
                              <MenuItem>Login</MenuItem>
                            </Link>
                          </MenuGroup>
                        );
                      }
                    })()
                  }
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs (not working) </MenuItem>
                  <MenuItem>FAQ (not working) </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
