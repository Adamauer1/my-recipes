import {Image, Text, StyleSheet, ScrollView, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {loadRecipes} from "@/utils/recipeStorage";
import {TRecipe} from "@/utils/types";

export default function Recipe() {
    const {id} = useLocalSearchParams();
    const [recipe, setRecipe] = useState<TRecipe>();
    useEffect(() => {
        const fetchRecipe = async () => {
            const storeRecipes = await loadRecipes();
            const index = storeRecipes.findIndex(r => r.id === id);
            setRecipe(storeRecipes[index]);
        }
        fetchRecipe().then(r => (
            console.log("Recipe loaded!")
        )).catch(e => console.log(e));
    }, []);
    //console.log(id);
    //console.log(recipeID);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    {/*<Ionicons name="ios-arrow-back-outline" size={30} />*/}
                    {/*<Ionicons name="ios-arrow-back-outline" size={30} />*/}
                </View>
                <View style={styles.titleCard}>
                    {/*<Image style={styles.titleImage} source={require('../assets/images/react-logo.png')}/>*/}
                    <View style={styles.titleContainer}>
                        <Text>{recipe?.title}</Text>
                        {/*<Ionicons name="ios-arrow-back" size={30} color="black"/>*/}
                    </View>
                </View>
                <View style={styles.descriptionCard}>
                    <View style={styles.descriptionContainer}>
                        <Text>{recipe?.time}</Text>
                        {/*<Text>35</Text>*/}
                        {/*<Text>mins</Text>*/}
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>{recipe?.servings}</Text>
                        {/*<Text>2</Text>*/}
                        {/*<Text>servings</Text>*/}
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>{recipe?.calories}</Text>
                        {/*<Text>800</Text>*/}
                        {/*<Text>calories</Text>*/}
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Ingredients</Text>
                    {recipe?.ingredients.map((ingredient, index) => (
                        <Text key={index} style={styles.contentText}>{index+1}. {ingredient}</Text>
                    ))}
                    {/*<Text style={styles.contentText}>2 & 1/4 cups (280g) - all-purpose flour</Text>*/}
                    {/*<Text style={styles.contentText}>1 tsp - baking soda</Text>*/}
                    {/*<Text style={styles.contentText}>1 & 1/2 tsp - cornstarch</Text>*/}
                    {/*<Text style={styles.contentText}>1/2 tsp - salt</Text>*/}
                    {/*<Text style={styles.contentText}>3/4 cup (170g) - unsalted butter, melted & cooled 5 minutes</Text>*/}
                    {/*<Text style={styles.contentText}>3/4 cup (150g) - packed light or dark brown sugar</Text>*/}
                    {/*<Text style={styles.contentText}> 1/2 cup (100g) - granulated sugar</Text>*/}
                    {/*<Text style={styles.contentText}> 1 large egg + 1 egg yolk, at room temperature</Text>*/}
                    {/*<Text style={styles.contentText}>2 tsp - pure vanilla extract</Text>*/}
                    {/*<Text style={styles.contentText}>1 and 1/4 cups (225g) - semi-sweet chocolate chips or chunks</Text>*/}
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentTitle}>Instructions</Text>
                    {recipe?.instructions.map((instruction, index) => (
                        <Text key={index} style={styles.contentText}>{index+1}. {instruction}</Text>
                    ))}
                    {/*<Text style={styles.contentTitle}>Instructions</Text>*/}
                    {/*<Text style={styles.contentText}>1.  Whisk the flour, baking soda, cornstarch, and salt together in a large bowl</Text>*/}
                    {/*<Text style={styles.contentText}>2. In a medium bowl, whisk the melted butter, brown sugar, and granulated sugar together until no brown sugar lumps remain.</Text>*/}
                    {/*<Text style={styles.contentText}>3. Whisk in the egg and egg yolk and vanilla extract</Text>*/}
                    {/*<Text style={styles.contentText}>4. Pour into dry ingredients and mix together</Text>*/}
                    {/*<Text style={styles.contentText}>5. Fold in the chocolate chips</Text>*/}
                    {/*<Text style={styles.contentText}>6. Cover the dough tightly and chill in the refrigerator for at least 2-3 hours</Text>*/}
                    {/*<Text style={styles.contentText}>7. Take dough out of refrigerator and allow to soften at room temperature for 10 minutes </Text>*/}
                    {/*<Text style={styles.contentText}>8. Preheat oven to 163c</Text>*/}
                    {/*<Text style={styles.contentText}>9. Using spoon or scoop make dough balls to 50g (medium/large) or 60g (XL) and make shape a little taller rather than wide </Text>*/}
                    {/*<Text style={styles.contentText}>10. Place 8 - 9 balls onto a baking sheet</Text>*/}
                    {/*<Text style={styles.contentText}>11. Bake for 12 - 13 minutes or until the edges are very lightly browned </Text>*/}
                    {/*<Text style={styles.contentText}>12. Cool for 10 minutes</Text>*/}
                </View>
                {/*<View>*/}
                {/*    <Text>Link: https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/#tasty-recipes-70437</Text>*/}
                {/*</View>*/}
            </ScrollView>
        </SafeAreaView>
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
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleCard: {
        borderWidth: 1,
        borderColor: "red",
    },
    titleImage: {
        alignSelf: "center",
    },
    titleContainer: {
        borderWidth: 1,
        borderColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionCard: {
        borderWidth: 1,
        borderColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    descriptionContainer: {
        borderWidth: 1,
        borderColor: "red",
        display: "flex",
        alignItems: "center",
    },
    contentContainer: {
        borderWidth: 1,
        borderColor: "red",
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    contentText: {
        paddingTop: 4,
    }
})