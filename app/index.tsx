import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Third Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "Third Item",
  },
  {
    id: "8",
    title: "Third Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
  {
    id: "10",
    title: "Third Item",
  },
  {
    id: "11",
    title: "Third Item",
  },
  {
    id: "12",
    title: "Third Item",
  },
  {
    id: "13",
    title: "Third Item",
  },
  {
    id: "14",
    title: "Third Item",
  },
  {
    id: "15",
    title: "Third Item",
  },
  {
    id: "16",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = () => {
  //show a list of all recipes
  //have an add button to take to adding page
  //have search bar / maybe filter button
  //think how to display list either with image and name next to it or big image of food with name underneath
  const [number, onChangeNumber] = React.useState("");
  return (
    <View>
      <Text style={{ color: "white" }}>My Recipes!</Text>
      <Pressable>
        <Text style={{ color: "white" }}>Search</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
