import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Button, IconButton, TextInput, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const testData = { dough: [""], sauce: [""] };

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState<{}>({ dough: ["test"] });

  const displayItems = (item: string) => {
    return (
      <View>
        <List.Item title="item" />
      </View>
    );
  };

  const displaySections = (title: string, data: any) => {
    return (
      <View>
        <Text style={{ color: "white" }}>Test Section</Text>
        <List.Accordion title={title}>
          {Object.keys(data).map((section) => {
            console.log(section);
            return (
              <View>
                <Text>{section}</Text>
              </View>
            );
          })}
          <List.Accordion title="Dough1">
            {/* {displayItems("")} */}
            <List.Item title="Flour" />
            <Button>
              <Text>Add Ingredient</Text>
            </Button>
          </List.Accordion>
          <Button>
            <Text>Add Section</Text>
          </Button>
          <Button>
            <Text>Remove Section</Text>
          </Button>
        </List.Accordion>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        icon="arrow-left"
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          borderColor: "red",
          borderWidth: 2,
        }}
      >
        <TextInput label={"Name"} multiline={true} />
        {/* add image input */}
        {/* add description input */}
        <View>
          <Text style={{ color: "white" }}>Ingredients</Text>
          {displaySections("Ingredients", ingredients)}
          {/* <View style={{ display: "flex", flexDirection: "row" }}>
            <Button>
              <Text>Add</Text>
            </Button>
            <Button>
              <Text>Remove</Text>
            </Button>
          </View> */}
        </View>
      </ScrollView>
      {/* <View
        style={{
          alignItems: "center",
          flex: 1,
          borderColor: "red",
          borderWidth: 2,
        }}
      >
        <TextInput multiline={true} />
      </View> */}
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

export default AddRecipe;
