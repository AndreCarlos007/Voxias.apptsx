import { CategoriaType } from "../../types";

export const categorias: CategoriaType[] = [
  {
    id: 1,
    nome: "Animais",
    cor: "bg-[#19804B]",
    itens: [
      {
        id: 1,
        nome: "Cachorro",
        cor: "bg-[#19804B]",
        img: require("../../assets/icons/cachorro.png"),
      },
      {
        id: 2,
        nome: "Gato",
        cor: "bg-[#19804B]",
        img: require("../../assets/images/logo.png"),
      },
      {
        id: 3,
        nome: "Cavalo",
        cor: "bg-[#19804B]",
        img: require("../../assets/images/logo.png"),
      },
    ],
  },
  {
    id: 2,
    nome: "Frutas",
    cor: "bg-[#E53935]",
    itens: [
      {
        id: 3,
        nome: "Maçã",
        cor: "bg-[#E53935]",
        img: require("../../assets/images/logo.png"),
      },
      {
        id: 4,
        nome: "Banana",
        cor: "bg-[#E53935]",
        img: require("../../assets/images/logo.png"),
      },
      {
        id: 5,
        nome: "Manga",
        cor: "bg-[#E53935]",
        img: require("../../assets/images/logo.png"),
      },
      {
        id: 6,
        nome: "Melancia",
        cor: "bg-[#E53935]",
        img: require("../../assets/images/logo.png"),
      },
      
      
    ],
  },
];
