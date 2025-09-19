import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView>
      <View className="static h-28 bg-terciary justify-center items-center">
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          className="mb-1"
        />
      </View>

      <View className="mt-[-4rem]">
        <Image
          source={require("../../assets/images/vinhas.png")}
          className="min-w-full h-32"
        />
      </View>
    </SafeAreaView>
  );
}
