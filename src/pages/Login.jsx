import React from "react";
import FormLogin from "../components/FormLogin";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Login = () => {
  return (
    <div>
      <Flex
        height={"80vh"}
        align={{ base: "center" }}
        flex={{ base: 1 }}
        justify={{ base: "center" }}
        direction={{ base: "column" }}
      >
        <Text
          fontFamily={"heading"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          color={useColorModeValue("teal.400", "white")}
          mb={"4vh"}
        >
          Tokopedia Play Clone
        </Text>
        <FormLogin />
        <Box mt={"10px"}>
          <Link href={"/register"}>Don't have account?</Link>
        </Box>
        <Box mt={"10px"}>
          <Link
            color={useColorModeValue("teal.400", "white")}
            fontWeight={"medium"}
            href={"/"}
          >
            Go Home
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Login;
