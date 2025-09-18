import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 bg-primary ">
        <View className="flex justify-center items-center h-[60%]">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-[144px] h-[60px] "
            resizeMode="contain"
          />
        </View>

        <View className="flex-1 bg-terciary rounded-tr-[4rem] rounded-tl-[4rem] ">
          <View className="">
            <Text className="text-5xl pl-8 pt-9 text-secondary font-radioBold">
              Log<Text className="text-white">in</Text>
            </Text>

            <View className="flex-row gap-6 justify-center items-center bg-primary mt-16  h-16 rounded-2xl mx-8">
              <View className=" bg-terciary w-9 h-9 flex justify-center items-center rounded-full">
                <Image
                  source={require("../../assets/icons/google.png")}
                  className="w-5 h-5 flex"
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text className="text-base text-neutro font-spaceBold">
                  Continue com o google.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
