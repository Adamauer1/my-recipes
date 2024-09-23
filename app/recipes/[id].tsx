import { useLocalSearchParams } from "expo-router";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type TRecipe = {
  id: number;
  name: string;
  image: string;
  description: {};
  ingredients: {};
  instructions: {};
  link: string;
};

function Recipe({}) {
  const params = useLocalSearchParams<{ recipe: string }>();
  const {
    id,
    name,
    image,
    description,
    ingredients,
    instructions,
    link,
  }: TRecipe = JSON.parse(params.recipe);
  // const params = useLocalSearchParams<Test>();
  // const { recipe } = params;
  // // const recipe: TRecipe = params;
  // const {
  //   id,
  //   name,
  //   image,
  //   description,
  //   ingredients,
  //   instructions,
  //   link,
  // }: TRecipe = JSON.parse(recipe);
  const displayList = (element: any) => {
    return Object.keys(element).map((stage, outerIndex) => {
      return (
        <View key={outerIndex}>
          <Title style={styles.text} key={outerIndex}>
            {stage}
          </Title>
          {element[stage].map((item: string, index: number) => {
            return (
              <Text style={styles.text} key={`${index}-${outerIndex}`}>
                {item}
              </Text>
            );
          })}
        </View>
        // <Text style={styles.text} key={i}>
        //   {element[item]}
        // </Text>
      );
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{image}</Text>
        <Text style={styles.text}>Description</Text>
        {displayList(ingredients)}
        {displayList(instructions)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default Recipe;
