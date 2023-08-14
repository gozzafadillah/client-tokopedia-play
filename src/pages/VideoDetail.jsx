import { Box, Card, Flex } from "@chakra-ui/react";
import { useParams } from "react-router";
import Comment from "../components/Comment";
import FormComment from "../components/FormComment";
import VideoContent from "../components/VideoContent";
import ListProduct from "../components/ListProduct";

const VideoDetail = () => {
  const param = useParams();

  return (
    <>
      <Flex flexWrap={"wrap"}>
        {/* Left sidebar */}
        <Card
          flex={{ base: "0.5", md: "0.5", sm: "0.2" }}
          h={{ md: "92vh", sm: "auto" }}
          border={{ sm: "0" }}
          p={4}
        >
          <ListProduct param={param} />
        </Card>

        {/* Main content */}
        <Box flex="1.8" p={4}>
          <VideoContent param={param} />
        </Box>

        {/* Right sidebar */}
        <Card flex={"1.5"}>
          <Comment param={param} />
          <FormComment param={param} />
        </Card>
      </Flex>
    </>
  );
};

export default VideoDetail;
