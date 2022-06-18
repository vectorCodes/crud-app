import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editpost, fetchPost } from "../Api";
import { IPost } from "../types";

function Dashboard() {
  const dispatch = useDispatch();
  const [editEntry, setEditEntry] = useState(-1);
  const [editValue, setEditValue] = useState({
    title: "",
    body: "",
  });
  const posts = useSelector((state: { posts: IPost[] }) => state.posts);

  useEffect(() => {
    dispatch(fetchPost() as any);
  }, [dispatch]);

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id) as any);
  };

  const hadleEditPost = (id: number, editValue: any) => {
    dispatch(
      editpost({
        id,
        ...editValue,
      }) as any
    );
    setEditEntry(-1);
  };

  return (
    <Box
      p={4}
      m={"0 auto"}
      maxW={"8xl"}
      shadow={"lg"}
      rounded={"md"}
      borderWidth={"1px"}
    >
      <Stack spacing={4}>
        {posts.map((post, idx) => {
          if (editEntry === idx) {
            return (
              <Stack spacing={4} key={idx}>
                <Input
                  defaultValue={post.title}
                  onChange={(e) => {
                    setEditValue({ ...editValue, title: e.target.value });
                  }}
                  maxW={"xl"}
                />
                <Textarea
                  defaultValue={post.body}
                  onChange={(e) => {
                    setEditValue({ ...editValue, body: e.target.value });
                  }}
                  maxW={"xl"}
                />
                <Button
                  onClick={() => {
                    hadleEditPost(post.id, editValue);
                  }}
                  maxW={"sm"}
                >
                  Save
                </Button>
              </Stack>
            );
          }
          return (
            <Box key={idx}>
              <HStack>
                <Box>
                  <Text>{idx + 1}.</Text>
                </Box>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  {post.title}
                </Text>
                <Spacer />
                <ButtonGroup>
                  <Button
                    variant={"solid"}
                    colorScheme={"telegram"}
                    onClick={() => {
                      setEditEntry(idx);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant={"ghost"}
                    colorScheme={"red"}
                    onClick={() => {
                      handleDeletePost(post.id);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </HStack>
              <Text>{post.body}</Text>
              <Divider my={6} />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Dashboard;
