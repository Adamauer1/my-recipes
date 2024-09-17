import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Recipe({}) {
  const params = useLocalSearchParams();
  const { recipeID } = params;

  return <Text>{recipeID}</Text>;
}
