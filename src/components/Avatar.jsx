import React from "react";
import {
  MenuButton,
  Avatar,
  MenuItem,
  MenuDivider,
  MenuList,
  Menu,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import useProfile from "../hooks/useProfile";
const AvatarComp = () => {
  const { profile, loading } = useProfile();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshTokn");
    window.location.reload();
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Flex gap={3}>
          <Text fontWeight={"bold"}>{profile.username}</Text>
          <Avatar size={"sm"} src={profile.img} />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuDivider />
        <MenuItem
          color={"white"}
          backgroundColor={"red.500"}
          _hover={{ backgroundColor: "red.300" }}
          onClick={() => handleLogout()}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarComp;
