import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../_components/Header"

export default function Home() {
    return (
        <View className="flex-1 bg-primary">
        <Header />
        <SafeAreaView >
            <View className="">
                <Text className="text-white">
                    HOME
                </Text>
            </View>
        </SafeAreaView>
         </View>
    )
}