import { Image, Text, TouchableOpacity, View } from "react-native";
import { ItemType } from "../../types";

type Props = {
  item: ItemType;
  onPress: (item: ItemType) => void;
};

export default function ItemCard({ item, onPress }: Props) {
  return (
    <View>

    
    <TouchableOpacity
      className={`flex justify-center items-center m-4 w-28 h-28 rounded-[100%] ${item.cor}`}
      onPress={() => onPress(item)}
    >
      <View className="">
        <Image
        source={item.img}
        className="w-16 h-16 object-cover"
        resizeMode="contain"
      />
      </View>
      
    </TouchableOpacity>
    <Text className="flex justify-center items-center text-white text-center font-spaceBold">{item.nome}</Text>
    </View>
  );
}
