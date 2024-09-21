import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recipe({}) {
  const params = useLocalSearchParams();
  const { recipe } = params;
  const { id, name, image, description, ingredients, instructions, link } =
    JSON.parse(recipe);
  return (
    <SafeAreaView>
      <Text>{recipeID}</Text>
      <Text></Text>
    </SafeAreaView>
  );
}
