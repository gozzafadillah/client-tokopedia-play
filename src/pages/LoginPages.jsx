import style from "../assets/css/login/login.module.css";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import UserAPI from "../apis/User.api";

const LoginPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await UserAPI.login(values.email, values.password);
        console.log(response);
        resolve();
      }, 3000);
    });
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Tokopedia Play Clone</h1>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)} className={style.formContent}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "This field is required" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email not valid!",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginPages;
