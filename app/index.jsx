import {
    Keyboard,
    Image,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    View,
    TouchableWithoutFeedback,
    FlatList, Pressable, Button
} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {Link} from "expo-router";
import {TRecipe} from "../utils/types";
import {addRecipe, clearRecipes, loadRecipes} from "../utils/recipeStorage";



const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Chocolate Chip Cookies',
        link: '1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        link: '2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        link: '3',
    },
];

// type ItemProps = {title: string};

const Item = ({title, id}) => (
    <Link key={1} href={{ pathname: '/recipes/[id]', params: {id: id}}} asChild>
        <Pressable>
            <View style={styles.item}>
                <Image source={require('../assets/images/react-logo.png')} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </Link>
);

export default function BuildScreen(){
    const [searchText, setSearchText] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const storeRecipes = await loadRecipes();
            //await clearRecipes()
            setRecipes(storeRecipes);
        }
        fetchRecipes().then(r => (
            console.log("Recipes loaded!")
        ));
    }, []);
    const handleTestAdd = async () => {
        const newRecipe= {
            id: Date.now().toString(),
            title: 'Test Recipe',
            time: "30 mins",
            servings: "2 servings",
            calories: "800 calories",
            ingredients: ['2 & 1/4 cups (280g) - all-purpose flour',
                            '1 tsp - baking soda',
                            '1 & 1/2 tsp - cornstarch',
                            '1/2 tsp - salt',
                            '3/4 cup (170g) - unsalted butter, melted & cooled 5 minutes',
                            '3/4 cup (150g) - packed light or dark brown sugar',
                            '1/2 cup (100g) - granulated sugar',
                            '1 large egg + 1 egg yolk, at room temperature',
                            '2 tsp - pure vanilla extract',
                            '1 and 1/4 cups (225g) - semi-sweet chocolate chips or chunks',
            ],
            instructions: ['Whisk the flour, baking soda, cornstarch, and salt together in a large bowl', 
                            'In a medium bowl, whisk the melted butter, brown sugar, and granulated sugar together until no brown sugar lumps remain.',
                            'Whisk in the egg and egg yolk and vanilla extract',
                            'Pour into dry ingredients and mix together',
                            'Fold in the chocolate chips',
                            'Cover the dough tightly and chill in the refrigerator for at least 2-3 hours',
                            'Take dough out of refrigerator and allow to soften at room temperature for 10 minutes',
                            'Preheat oven to 163c',
                            'Using spoon or scoop make dough balls to 50g (medium/large) or 60g (XL) and make shape a little taller rather than wide',
                            'Place 8 - 9 balls onto a baking sheet',
                            'Bake for 12 - 13 minutes or until the edges are very lightly browned',
                            'Cool for 10 minutes',
            ],
            image: "",
            description: "",
            link: "",
        };
        await addRecipe(newRecipe);
        const updated = await loadRecipes();
        setRecipes(updated);
    };

    const handleClear = async () => {
        await clearRecipes();
        setRecipes([]);
    };
    return(
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "gray",
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        width: "100%",
                        height: 40,
                        backgroundColor: "#f0f0f0",
                    }}
                >
                    <Ionicons name="search" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        style={{ flex: 1, height: "100%" }}
                        placeholder="Search..."
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <FlatList
                        data={recipes}
                        renderItem={({item}) => <Item title={item.title} id={item.id}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Button title="Add Test Recipe" onPress={handleTestAdd} />
                <Button title="Clear All" onPress={handleClear} color="red" />
                <Link href='/recipes/add-recipe' onPress={() => console.log("test")} asChild>
                    <Pressable style={styles.addRecipe}>
                        <View>
                            <Image source={require('../assets/images/react-logo.png')} />
                        </View>
                    </Pressable>
                </Link>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "red",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 20,
        marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        // fontSize: 32,
    },
    addRecipe: {
        borderWidth: 1,
        borderColor: "red",
        position: "absolute",
        bottom: 40,
        right: 20,
        zIndex: 100,
    }
})