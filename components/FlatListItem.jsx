import { Box, Text } from "@gluestack-ui/themed";

export const FlatListItem = ({ item }) => (
  <Box className="bg-pink-300 p-8 my-5 h-20 items-center justify-center w-full">
    <Text className="p-2 text-lg h-11">{item.name}</Text>
  </Box>
);