import React from "react";
import {
  MenuButton,
  Avatar,
  MenuItem,
  MenuDivider,
  MenuList,
  Menu,
  Button,
} from "@chakra-ui/react";
const AvatarComp = () => {
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
          onClick={() => handleLogout()}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarComp;
