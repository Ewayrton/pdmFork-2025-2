import { PizzaTranslator } from "@/components/PizzaTranslator";
import { SectionListExample } from "@/components/SectionListExample";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { useStore } from "@/zustand";
import { Box, Heading, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function Index() {
  const isEnabled = useStore((state) => state.isEnabled);
  const toggleIsEnabled = useStore((state) => state.toggleIsEnabled);

  return (
    <VStack className="flex-1 items-center pt-5">
      <Switch
        value={isEnabled}
        onValueChange={toggleIsEnabled}
        className="mb-4"
      />
      <Box className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </Box>
      <Spinner size="large" />
      
      {isEnabled ? (
        <SectionListExample />
      ) : (
        <VStack className="flex-1 justify-start items-center mt-6 w-full">
          <Heading className="text-blue-600 mb-4">Olá Turma!!!</Heading>
          <Link href="/list">
            <Text className="text-blue-500 underline mb-2">Section List Example</Text>
          </Link>
          <Link href="/tarefas">
            <Text className="text-blue-500 underline mb-4">Tasks Example</Text>
          </Link>
          <PizzaTranslator />
        </VStack>
      )}
    </VStack>
  );
}