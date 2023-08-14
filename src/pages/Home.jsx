import React from "react";
import "../assets/css/App.css";
import useVideos from "../hooks/useVideos";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Box, Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Skeleton } from "@chakra-ui/react";
import CardSkeleton from "../components/CardSkeleton";

const Home = () => {
  const { videos, loading } = useVideos();
  const navigate = useNavigate();
  console.log(loading);
  return (
    <div>
      <Navbar />
      <Box padding={{ base: "2rem", md: "2rem", sm: "1.5rem" }}>
        <Flex
          justify={{ base: "center" }}
          align={{ base: "center" }}
          gap={{ base: "1rem" }}
          flexWrap={"wrap"}
          flex={{ base: 1 }}
        >
          {loading !== true ? (
            videos.map((video, index) => (
              <Box
                key={index}
                cursor={"pointer"}
                onClick={() => navigate("/videos/1")}
              >
                <Card data={video} />
              </Box>
            ))
          ) : (
            <>
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <Box key={index}>
                    <Skeleton>
                      <CardSkeleton />
                    </Skeleton>
                  </Box>
                ))}
            </>
          )}
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
