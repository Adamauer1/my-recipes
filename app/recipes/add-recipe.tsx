import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Keyboard, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View, Text} from "react-native";

export default function AddRecipe() {
    const [searchText, setSearchText] = useState("");
    return(
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "gray",
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            width: "100%",
                            height: 40,
                            backgroundColor: "#f0f0f0",
                        }}>
                            <TextInput
                                style={{ flex: 1, height: "100%" }}
                                placeholder="Title"
                                placeholderTextColor={"black"}
                                textAlign={"center"}
                                value={searchText}
                                onChangeText={setSearchText}
                            />    
                        </View>
                        <View>
                            <Text>Time to make</Text>
                            <></>
                        </View>                        
                    </ScrollView>
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
})