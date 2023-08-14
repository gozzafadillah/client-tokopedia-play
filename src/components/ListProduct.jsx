import React from "react";
import { Heading, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import useVideosId from "../hooks/useVideosId";

const relatedProducts = [
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

const ListProduct = ({ param }) => {
  const { video, loading } = useVideosId(param.id);
  console.log(video);
  return (
    <>
      <Heading size="md" mb={2}>
        Products
      </Heading>
      <List spacing={2}>
        {loading ? (
          <Skeleton>
            <ListItem>
              <Text>cek</Text>
            </ListItem>
          </Skeleton>
        ) : (
          <>
            {video?.product.map((item) => (
              <ListItem key={item._id}>
                <Text>{item.title}</Text>
              </ListItem>
            ))}
          </>
        )}
      </List>
    </>
  );
};

export default ListProduct;
