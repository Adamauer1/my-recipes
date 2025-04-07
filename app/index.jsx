import {
    Keyboard,
    Image,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    View,
    TouchableWithoutFeedback,
    FlatList, Pressable
} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Link} from "expo-router";


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Cookie',
        link: '1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        link: '',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        link: '',
    },
];

// type ItemProps = {title: string};

const Item = ({title, link}) => (
    <Link key={1} href={{ pathname: '/recipes/[id]', params: {id: link}}} asChild>
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
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />
                </View>
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
})