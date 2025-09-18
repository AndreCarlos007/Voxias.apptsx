import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-primary justify-center items-center">
            <View className="">
                <Text className="text-white">
                    HOME
                </Text>
            </View>
        </SafeAreaView>
    )
}