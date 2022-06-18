import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createPost } from "../Api";
import { useDispatch } from "react-redux";

function Form() {
  const form = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(createPost(data) as any);
    form.reset();
  };

  return (
    <Box p={4}>
      <Box shadow={"lg"} rounded={"md"} p={6} borderWidth={"1px"}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="email">Title</FormLabel>
            <Input type="text" {...form.register("title")} maxW={"md"} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Body</FormLabel>
            <Input type="text" {...form.register("body")} maxW={"md"} />
          </FormControl>
          <Button
            colorScheme={"twitter"}
            type="submit"
            variant={"solid"}
            mt={4}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Form;
