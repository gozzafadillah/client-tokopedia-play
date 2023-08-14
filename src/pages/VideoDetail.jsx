import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import Comment from "../components/Comment";
import FormComment from "../components/FormComment";

const product = {
  id: 1,
  name: "Product 1",
  description: "This is a description of product 1.",
};

const relatedProducts = [
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

const VideoDetail = () => {
  const param = useParams();

  return (
    <>
      <Flex>
        {/* Left sidebar */}
        <Box flex="0.5" p={4}>
          <Heading size="md" mb={2}>
            Related Products
          </Heading>
          <List spacing={2}>
            {relatedProducts.map((relatedProduct) => (
              <ListItem key={relatedProduct.id}>
                <Text>{relatedProduct.name}</Text>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main content */}
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>
            {product.name}
          </Heading>
          <Box mb={4}>
            {/* Replace with your video component */}
            <Box
              bg="gray.200"
              h="300px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Video
            </Box>
          </Box>
          <Text>{product.description}</Text>
        </Box>

        {/* Right sidebar */}
        <Box flex={1.5}>
          <Comment param={param} />
          <FormComment param={param} />
        </Box>
      </Flex>
    </>
  );
};

export default VideoDetail;
