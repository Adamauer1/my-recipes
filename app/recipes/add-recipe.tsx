import React, {useRef, useState} from 'react';
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
import RNPickerSelect from 'react-native-picker-select';
import {Picker, PickerIOS} from '@react-native-picker/picker';

const imperialUnits = [
    { label: 'tsp', value: 'tsp' },
    { label: 'tbsp', value: 'tbsp' },
    { label: 'cups', value: 'cups' },
    { label: 'oz', value: 'oz' },
];

type Ingredient = {
    name: string;
    quantity: string;
    unit: string;
};


export default function AddRecipe() {
    const defaultTime = new Date();
    defaultTime.setHours(0);
    defaultTime.setMinutes(0);
    defaultTime.setSeconds(0);
    defaultTime.setMilliseconds(0);
    const [titleText, setTitleText] = useState("");
    const [time, setTime] = useState(defaultTime);
    const [show, setShow] = useState(false);
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { name: '', quantity: '', unit: '' }
    ]);
    const [unit, setUnit] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();

    const onTimeChange = (_: any, selectedTime?: Date) => {
        setShow(Platform.OS === 'ios');
        if (selectedTime) {
            setTime(selectedTime);
        }
    }

    const updateIngredient = (index: number, key: keyof Ingredient, value: string) => {
        const updated = [...ingredients];
        updated[index][key] = value;
        setIngredients(updated);
    }
    const inputRefName = useRef<TextInput | null>(null);
    const pickerRef = useRef<any>(null);

    return(
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <Text>Add Recipe</Text>
                    {/*<PickerIOS*/}
                    {/*    selectedValue={unit}*/}
                    {/*    onValueChange={(itemValue) => setUnit(itemValue)}*/}
                    {/*    //mode="dropdown" // or "dialog"*/}
                    {/*>*/}
                    {/*    <Picker.Item label="Test" value="1" color={"black"}/>*/}
                    {/*    <Picker.Item label="Test1" value="2" color={"black"}/>*/}
                    {/*    <Picker.Item label="Test2" value="3" color={"black"}/>*/}
                    {/*    <Picker.Item label="Test3" value="4" color={"black"}/>*/}
                    {/*    <Picker.Item label="Test4" value="5" color={"black"}/>*/}
                    {/*</PickerIOS>*/}
                    <Picker
                        selectedValue={unit}
                        onValueChange={(itemValue) => setUnit(itemValue)}
                        mode="dropdown" // or "dialog"
                    >
                        <PickerIOS.Item label="Test" value="" color={"black"}/>
                        <Picker.Item label="Select unit..." value="" color={"black"}/>
                        <Picker.Item label="Grams" value="g" color={"black"} enabled={false}/>
                        <Picker.Item label="Kilograms" value="kg" color={"black"}/>
                        <Picker.Item label="Cups" value="cups" color={"black"}/>
                        <Picker.Item label="Tablespoons" value="tbsp" color={"black"} />
                        <Picker.Item label="Teaspoons" value="tsp" color={"black"}/>
                    </Picker>
                    {/*<Picker*/}
                    {/*    selectedValue={selectedLanguage}*/}
                    {/*    onValueChange={(itemValue, itemIndex) =>*/}
                    {/*        setSelectedLanguage(itemValue)*/}
                    {/*    }>*/}
                    {/*    <Picker.Item label="Java" value="java" color={"black"} />*/}
                    {/*    <Picker.Item label="JavaScript" value="js" color={"black"} />*/}
                    {/*</Picker>*/}
                    {/*<ScrollView>*/}
                    {/*    <View style={{*/}
                    {/*        flexDirection: "row",*/}
                    {/*        alignItems: "center",*/}
                    {/*        borderWidth: 1,*/}
                    {/*        borderColor: "gray",*/}
                    {/*        borderRadius: 10,*/}
                    {/*        paddingHorizontal: 10,*/}
                    {/*        width: "100%",*/}
                    {/*        height: 40,*/}
                    {/*        backgroundColor: "#f0f0f0",*/}
                    {/*    }}>*/}
                    {/*        <TextInput*/}
                    {/*            style={{ flex: 1, height: "100%" }}*/}
                    {/*            placeholder="Title"*/}
                    {/*            placeholderTextColor={"black"}*/}
                    {/*            textAlign={"center"}*/}
                    {/*            value={titleText}*/}
                    {/*            onChangeText={setTitleText}*/}
                    {/*        />*/}
                    {/*    </View>*/}
                    {/*    <View>*/}
                    {/*        <Text>Time to make</Text>*/}
                    {/*        <RNDateTimePicker value={time} mode={"time"} is24Hour={true} display={"default"} onChange={onTimeChange}/>*/}
                    {/*    </View>*/}
                    {/*    <View>*/}
                    {/*        <Text>Serving Size</Text>*/}
                    {/*        <TextInput*/}
                    {/*            style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}*/}
                    {/*            placeholder="1"*/}
                    {/*            placeholderTextColor={"black"}*/}
                    {/*            keyboardType={"decimal-pad"}*/}
                    {/*        />*/}
                    {/*    </View>*/}
                    {/*    <View>*/}
                    {/*        <Text>Calories</Text>*/}
                    {/*        <TextInput*/}
                    {/*            style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}*/}
                    {/*            placeholder="1000"*/}
                    {/*            placeholderTextColor={"black"}*/}
                    {/*            keyboardType={"decimal-pad"}*/}
                    {/*        />*/}
                    {/*    </View>*/}
                    {/*    <View>*/}
                    {/*        <Text>Ingredients</Text>*/}
                    {/*        {ingredients.map((ingredient, index) => (*/}
                    {/*            <View key={index}>*/}
                    {/*                <TextInput*/}
                    {/*                    style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}*/}
                    {/*                />*/}
                    {/*                <TextInput style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}*/}
                    {/*                />*/}
                    {/*            </View>*/}
                    {/*        ))}*/}
                    {/*        <View>*/}
                    {/*            <TextInput style={{height: 40, width: 100, borderWidth: 1, borderColor: "gray"}}/>*/}
                    {/*        </View>*/}
                    {/*        <Pressable>*/}
                    {/*            <Text>Add</Text>*/}
                    {/*        </Pressable>*/}
                    {/*        <View style={styles.containerP}>*/}
                    {/*            <Text style={styles.label}>Select Unit:</Text>*/}
                    {/*            <View style={styles.pickerWrapper}>*/}
                    {/*                <RNPickerSelect*/}
                    {/*                    onValueChange={(value) => console.log(value)}*/}
                    {/*                    items={[*/}
                    {/*                        { label: 'Football', value: 'football', color: 'black' },*/}
                    {/*                        { label: 'Baseball', value: 'baseball' },*/}
                    {/*                        { label: 'Hockey', value: 'hockey' },*/}
                    {/*                    ]}*/}

                    {/*                />*/}
                    {/*                <Picker*/}
                    {/*                    selectedValue={unit}*/}
                    {/*                    onValueChange={(itemValue) => setUnit(itemValue)}*/}
                    {/*                    mode="dialog" // or "dialog"*/}
                    {/*                >*/}
                    {/*                    <Picker.Item label="Select unit..." value="" color={'black'} />*/}
                    {/*                    <Picker.Item label="Grams" value="g" color={'black'}/>*/}
                    {/*                    <Picker.Item label="Kilograms" value="kg" color={'black'}/>*/}
                    {/*                    <Picker.Item label="Cups" value="cups" color={'black'}/>*/}
                    {/*                    <Picker.Item label="Tablespoons" value="tbsp" color={'black'}/>*/}
                    {/*                    <Picker.Item label="Teaspoons" value="tsp" color={'black'} />*/}
                    {/*                </Picker>*/}
                    {/*            </View>*/}
                    {/*            <Text style={{ marginTop: 20 }}>Selected: {unit}</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}

                    {/*</ScrollView>*/}
                    {/*<Pressable>*/}
                    {/*    <Text>Add Recipe</Text>*/}
                    {/*</Pressable>*/}
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
