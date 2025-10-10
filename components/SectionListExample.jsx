import { PEOPLE_LIST as DATA } from "@/data";
import { transformListToSectionList } from "@/utils";
import { useStore } from "@/zustand";
import { Box, Heading, SectionList, Text } from "@gluestack-ui/themed";

const TRANSFORMED_DATA = transformListToSectionList(DATA);

export const SectionListExample = () => {
  const isEnabled = useStore((state) => state.isEnabled);

  return (
    <Box className="flex-1 w-full pt-6">
      <Text className="mb-3 text-xl text-center">
        {isEnabled ? "Enabled" : "Disabled"}
      </Text>
      <SectionList
        sections={TRANSFORMED_DATA}
        renderItem={({ item }) => <Text className="p-3 text-lg h-11">{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Heading className="p-2 text-base font-bold text-center bg-gray-200">
            {section.title}
          </Heading>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </Box>
  );
};