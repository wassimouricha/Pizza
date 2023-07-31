import { ImageSourcePropType } from "react-native";

export const pizzas = [
    {
      nomPizza: "Reine" ,
      taillePizza: "Moyenne",
      basePizza: "Tomate",
      ingredientsPizza: "Jambon, Champignons, Fromage",
      prixPizza: 9.99,
      imagePizza: require("../assets/pizza1.jpg") as ImageSourcePropType,
    },
    {
        nomPizza: "Reine" ,
        taillePizza: "Grande",
        basePizza: "Tomate",
        ingredientsPizza: "Jambon, Champignons, Fromage",
        prixPizza: 12.99,
        imagePizza: require("../assets/pizza1.jpg") as ImageSourcePropType,
    },
    {
        nomPizza: "4 Fromages" ,
        taillePizza: "Moyenne",
        basePizza: "Crème",
        ingredientsPizza: "Mozzarella, Chèvre, Gorgonzola, Parmesan",
        prixPizza: 11.99,
        imagePizza: require("../assets/pizza2.jpg") as ImageSourcePropType,
    },
    {
        nomPizza: "4 Fromages" ,
        taillePizza: "Grande",
        basePizza: "Crème",
        ingredientsPizza: "Mozzarella, Chèvre, Gorgonzola, Parmesan",
        prixPizza: 14.99,
        imagePizza: require("../assets/pizza2.jpg") as ImageSourcePropType,
    },

  ]

  