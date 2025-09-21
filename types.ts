export type ItemType = {
  id: number;
  nome: string;
  cor: string;
  img: any; 
};

export type CategoriaType = {
  id: number;
  nome: string;
  cor: string;
  itens: ItemType[];
};
