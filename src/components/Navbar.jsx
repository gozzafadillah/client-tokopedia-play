import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  MenuButton,
  Avatar,
  MenuItem,
  MenuDivider,
  MenuList,
  Menu,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center" }}>
          <Text
            cursor={"pointer"}
            onClick={() => navigate("/")}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontWeight={"bold"}
            color={useColorModeValue("teal.400", "white")}
          >
            Tokopedia Play Clone
          </Text>
        </Flex>
        {isLogin ? (
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem
                color={"white"}
                backgroundColor={"red.500"}
                _hover={{ backgroundColor: "red.300" }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"/login"}
            >
              Login
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"teal.400"}
              href={"/register"}
              _hover={{
                bg: "teal.300",
              }}
            >
              Register
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
}
