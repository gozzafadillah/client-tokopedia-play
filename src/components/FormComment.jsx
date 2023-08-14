import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";
import CommemtAPI from "../api/comments";
const FormComment = ({ param }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        await CommemtAPI.createComment(param.id, values.comment);
        reset({ comment: "" });
        resolve();
      }, 3000);
    });
  }
  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.comment}>
          <FormLabel htmlFor="comment">Comment Section</FormLabel>
          <Textarea
            id="comment"
            placeholder="Comment here ..."
            {...register("comment", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.comment && errors.comment.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormComment;
