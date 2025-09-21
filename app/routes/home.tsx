import { ScrollView, View } from "react-native";

import Header from "../_components/Header";

import { categorias } from "../_data/categorias";
import { ItemType } from "../../types";
import Categoria from "../_components/Categorias";

export default function Home() {
  function handleItemPress(item: ItemType): void {
    throw new Error("Item Clicado");
  }

  return (
    <View className="flex-1 bg-primary">
      <Header />

      <ScrollView>
        {categorias.map((categoria) => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
            onItemPress={handleItemPress}
          />
        ))}
      </ScrollView>
    </View>
  );
}
