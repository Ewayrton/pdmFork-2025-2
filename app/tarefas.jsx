import { addTarefa, deleteTarefa, getTarefas, updateTarefa } from "@/api";
import { CardTarefa } from "@/components/CardTarefa";
import {
  Box,
  Button,
  ButtonText,
  FlatList,
  Heading,
  Input,
  InputField,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Alert } from "react-native";

export default function TelaTarefas() {
  const [descricao, setDescricao] = useState("");
  const queryClient = useQueryClient();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });

  const updateMutation = useMutation({
    mutationFn: updateTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  const addMutation = useMutation({
    mutationFn: addTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
      setDescricao("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  const handleAdd = () => {
    if (!descricao.trim()) {
      Alert.alert("Atenção", "A descrição não pode estar vazia");
      return;
    }
    addMutation.mutate({ descricao });
  };

  function handleToggle(tarefa) {
    updateMutation.mutate({
      ...tarefa,
      concluida: !tarefa.concluida,
    });
  }

  function handleDelete(tarefa) {
    deleteMutation.mutate(tarefa);
  }

  return (
    <Box className="flex-1 bg-white items-center justify-start pb-8">
      <Box className="w-11/12 flex-row items-center justify-between p-2 border border-gray-300 rounded-md my-3">
        <Input variant="unstyled" className="flex-1">
          <InputField
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            onSubmitEditing={handleAdd}
          />
        </Input>
        <Button onPress={handleAdd} action="primary">
          <ButtonText>ADD</ButtonText>
        </Button>
      </Box>

      {isPending ? <Heading>Carregando...</Heading> : (
        <FlatList
          className="flex-1 w-full"
          contentContainerClassName="items-center"
          data={data}
          keyExtractor={(item) => item.objectId}
          renderItem={({ item }) => (
            <CardTarefa
              tarefa={item}
              onToggle={handleToggle}
              onPress={handleDelete}
            />
          )}
        />
      )}

      {(error || isFetching) && (
        <View className="bg-yellow-300 w-full h-12 items-center justify-center">
          {error && <Text className="text-red-600">Erro: {error.message}</Text>}
          {isFetching && <Text>Atualizando...</Text>}
        </View>
      )}
    </Box>
  );
}