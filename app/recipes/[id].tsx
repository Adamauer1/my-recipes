import {Image, ScrollView, StyleSheet, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Recipe() {
    return (
        <SafeAreaView>
            <ScrollView>
                {/*<Image source={require('expo-image')} />*/}
                <Text>{"Test"}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});