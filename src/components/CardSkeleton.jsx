import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const CardSkeleton = () => {
  return (
    <Box border={{ base: "1px solid teal" }}>
      <Box position="relative">
        <Image src="https://picsum.photos/200/500" alt="..." />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          p={2}
        >
          <Box height={{ base: "8rem", md: "7rem", sm: "8rem" }}>
            <Text>Description</Text>
            <Text>tittle</Text>
            <Text>views</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardSkeleton;
