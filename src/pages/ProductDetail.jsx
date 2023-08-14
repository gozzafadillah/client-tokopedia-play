import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

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

const comments = [
  { id: 1, text: "This is a great product!" },
  { id: 2, text: "I love this product!" },
  { id: 3, text: "This product is amazing!" },
];

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <Flex>
        {/* Left sidebar */}
        <Box flex="1" p={4}>
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
        <Box flex="1" p={4}>
          <Heading size="md" mb={2}>
            Comments
          </Heading>
          <VStack spacing={2} overflowY="scroll" maxH="80vh">
            {comments.map((comment) => (
              <Box key={comment.id} p={2} bg="gray.100" borderRadius="md">
                <Text>{comment.text}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default ProductDetail;
