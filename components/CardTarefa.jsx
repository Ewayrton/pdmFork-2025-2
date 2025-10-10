import {
  Box,
  Button,
  ButtonIcon,
  CloseIcon,
  Switch,
  Text,
} from "@gluestack-ui/themed";
import { useState } from "react";

export function CardTarefa({ tarefa, onToggle, onPress }) {
  const [disabled, setDisabled] = useState(false);
  
  const handlePress = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
    onPress(tarefa);
  };

  return (
    <Box className="w-11/12 bg-white rounded-lg shadow-md h-24 p-2 m-2 flex-col justify-between">
      <Box className="flex-row items-center justify-between">
        <Text className="flex-1">{tarefa.descricao}</Text>
        <Switch
          value={tarefa.concluida}
          onValueChange={() => onToggle(tarefa)}
        />
      </Box>
      <Box className="flex-row justify-end">
        <Button
          size="xs"
          action="negative"
          variant="link"
          onPress={handlePress}
          disabled={disabled}
        >
          <ButtonIcon as={CloseIcon} />
        </Button>
      </Box>
    </Box>
  );
}