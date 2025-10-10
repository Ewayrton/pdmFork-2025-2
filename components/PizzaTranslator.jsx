import { Box, Heading, Input, InputField } from "@gluestack-ui/themed";
import React, { useState } from "react";

export const PizzaTranslator = () => {
  const [text, setText] = useState("");
  return (
    <Box className="p-3 w-11/12">
      <Input>
        <InputField
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          className="h-10"
        />
      </Input>
      <Heading className="p-3 text-4xl">
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Heading>
    </Box>
  );
};