import React, { useEffect, useRef, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import CommemtAPI from "../api/comments";
import Pusher from "pusher-js";

const Comment = ({ param }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const lastCommentRef = useRef(null);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await CommemtAPI.getComments(param.id);
      setComments(response.data.data);
      setLoading(false);
    };
    fetchComments();
    // pusher
    var pusher = new Pusher("5685301a3db72a420893", {
      cluster: "ap1",
    });
    const channel = pusher.subscribe("comments");
    channel.bind("new-comment", (data) => {
      setComments((prevComments) => [...prevComments, data.comment]);
    });
    // comment
    if (lastCommentRef.current) {
      lastCommentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [param.id]);
  return (
    <Box p={4}>
      <Heading size="md" mb={2}>
        Comments
      </Heading>
      <VStack spacing={2} overflowY="scroll" maxH="45vh">
        {!loading ? (
          comments.slice().map((comment, index) => (
            <Box
              key={index}
              p={2}
              width={"18rem"}
              bg="gray.100"
              borderRadius="md"
              // Jika ini adalah komentar terakhir, tambahkan ref ke elemen ini
              ref={index === 0 ? lastCommentRef : null} // Komentar terakhir sekarang pada index 0
            >
              {/* Tampilkan nama akun di samping atau di atas komentar */}
              <Text fontWeight="bold">{comment.username}</Text>
              <Text>{comment.comment}</Text>
            </Box>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Comment;
