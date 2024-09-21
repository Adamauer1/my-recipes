import React from "react";
import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, List, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
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
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          borderColor: "red",
          borderWidth: 2,
        }}
      >
        {/* <Text style={{ color: "white" }}>My Recipes!</Text> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderColor: "red",
            borderWidth: 2,
            alignItems: "center",
          }}
        >
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
          /> */}
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{ width: "80%" }}
          />
          {/* <Pressable
            onPress={() => Alert.alert("Left button pressed")}
            style={styles.button}
          >
            <Text style={{ color: "white" }}>Search</Text>
          </Pressable> */}
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    padding: 8,
  },
  item: {
    backgroundColor: "#f9c2ff",
    borderColor: "red",
    borderWidth: 2,
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
    // flex: 1,
  },
  title: {
    fontSize: 32,
  },
  input: {
    borderColor: "red",
    borderWidth: 2,
    height: 40,
    margin: 12,
    padding: 10,
  },
  button: {
    fontWeight: "bold",
    letterSpacing: 0.1,
    borderRadius: 1.1,
    backgroundColor: "grey",
    color: "white",
    padding: 2,

    // --hover-shadows: 16px 16px 33px #121212, -16px -16px 33px #303030;
    // --accent: fuchsia;
    // font-weight: bold;
    // letter-spacing: 0.1em;
    // border: none;
    // border-radius: 1.1em;
    // background-color: #212121;
    // cursor: pointer;
    // color: white;
    // padding: 1em 2em;
    // transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
    //   letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
    // box-shadow: 13px 13px 10px #1c1c1c, -13px -13px 10px #262626;
  },
});

export default HomeScreen;
