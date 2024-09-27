import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Button, IconButton, List, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
// import recipesJson from "@/assets/data/recipes.json";
import recipes from "@/assets/data/recipes";
type ItemProps = { recipe: any };
const image = recipes[0].image;
const Item = ({ recipe }: ItemProps) => {
  // console.log(recipe.name);
  // console.log(recipe.name);
  // const image = require(recipe.image);
  return (
    <View style={styles.item}>
      <Link
        href={{
          pathname: `/recipes/[id]`,
          params: { id: recipe.id, recipe: JSON.stringify(recipe) },
        }}
        asChild
      >
        <Pressable>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={recipe.image} style={{ flex: 0.3, height: 80 }} />
            <Text style={styles.title}>{recipe.name}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

const HomeScreen = () => {
  //show a list of all recipes
  //have an add button to take to adding page
  //have search bar / maybe filter button
  //think how to display list either with image and name next to it or big image of food with name underneath
  const [number, onChangeNumber] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);

  const handleSearchSubmit = () => {
    if (searchQuery) {
      const regex = RegExp(searchQuery, "i");
      setDisplayedRecipes(
        recipes.filter((recipe: any) => regex.test(recipe.name))
      );
    } else {
      setDisplayedRecipes(recipes);
    }
  };

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
            gap: 2,
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
            onSubmitEditing={handleSearchSubmit}
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
          data={displayedRecipes}
          // renderItem={(recipe) => <Item recipe={recipe} />}
          renderItem={(recipe) => <Item recipe={recipe.item} />}
          // keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
        />
        <Link
          // href={{
          //   pathname: `/recipes/[id]`,
          //   params: { id: recipe.id, recipe: JSON.stringify(recipe) },
          // }}
          href={"/addRecipe"}
          asChild
        >
          <Pressable style={styles.test}>
            <IconButton icon="plus" size={50} />
            {/* <Text style={styles.test}>Test</Text> */}
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  test: {
    color: "white",
    position: "absolute",
    borderColor: "red",
    borderWidth: 2,
    right: 0,
    bottom: 0,
  },
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
    fontSize: 20,
    flex: 0.7,
    marginLeft: 10,
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
