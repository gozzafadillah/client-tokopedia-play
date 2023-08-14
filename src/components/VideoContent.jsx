import React from "react";
import ReactPlayer from "react-player/lazy";
import { Box, Heading, Skeleton, Text } from "@chakra-ui/react";
import useVideosId from "../hooks/useVideosId";

const product = {
  id: 1,
  name: "Product 1",
  description: "This is a description of product 1.",
  videoUrl: "https://youtu.be/2mCL4-T3X04s",
};

const VideoContent = ({ param }) => {
  const { video, loading } = useVideosId(param.id);
  return (
    <>
      {loading ? (
        <Skeleton>
          <Heading size="lg" mb={4}>
            cek
          </Heading>
        </Skeleton>
      ) : (
        <Heading size="lg" mb={4}>
          {video.video.title}
        </Heading>
      )}
      <Box mb={4}>
        {/* Replace with your video component */}
        {loading ? (
          <Skeleton>
            <Box>
              <ReactPlayer controls={true} />
            </Box>
          </Skeleton>
        ) : (
          <Box>
            <ReactPlayer url={video.video.videoUrl} controls={true} />
          </Box>
        )}
      </Box>
      <Text>{product.description}</Text>
    </>
  );
};

export default VideoContent;
