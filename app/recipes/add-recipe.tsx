import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {
    Keyboard,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Text,
    Pressable,
    Platform
} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from "@react-native-picker/picker";

export default function AddRecipe() {
    const defaultTime = new Date();
    defaultTime.setHours(0);
    defaultTime.setMinutes(0);
    defaultTime.setSeconds(0);
    defaultTime.setMilliseconds(0);
    const [titleText, setTitleText] = useState("");
    const [time, setTime] = useState(defaultTime);
    const [show, setShow] = useState(false);

    const onTimeChange = (_: any, selectedTime?: Date) => {
        setShow(Platform.OS === 'ios');
        if (selectedTime) {
            setTime(selectedTime);
        }
    }

    return(
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <Text>Add Recipe</Text>
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
                                value={titleText}
                                onChangeText={setTitleText}
                            />    
                        </View>
                        <View>
                            <Text>Time to make</Text>
                            <RNDateTimePicker value={time} mode={"time"} is24Hour={true} display={"default"} onChange={onTimeChange}/>
                        </View>
                        <View>
                            <Text>Serving Size</Text>
                            <TextInput
                                style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}
                                placeholder="1"
                                placeholderTextColor={"black"}
                                keyboardType={"decimal-pad"}
                            />
                        </View>
                        <View>
                            <Text>Calories</Text>
                            <TextInput
                                style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}
                                placeholder="1000"
                                placeholderTextColor={"black"}
                                keyboardType={"decimal-pad"}
                            />
                        </View>
                        <View>
                            <Text>Ingredients</Text>
                            <View>
                                <TextInput style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}/>
                                {/*<Picker*/}
                                {/*    onValueChange={(value) => }*/}
                                {/*/>*/}
                            </View>
                            <Pressable>
                                <Text>Add</Text>
                            </Pressable>
                        </View>

                    </ScrollView>
                    <Pressable>
                        <Text>Add Recipe</Text>
                    </Pressable>
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