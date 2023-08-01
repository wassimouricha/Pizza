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
        nomPizza: "Chevre miel" ,
        taillePizza: "Grande",
        basePizza: "Crème",
        ingredientsPizza: "Chèvre, Miel, Fromage",
        prixPizza: 12.99,
        imagePizza: require("../assets/pizzam.jpeg") as ImageSourcePropType,
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
        nomPizza: "Saumon" ,
        taillePizza: "Grande",
        basePizza: "Crème",
        ingredientsPizza: "Saumon, Crème, Fromage",
        prixPizza: 14.99,
        imagePizza: require("../assets/pizzasa.jpeg") as ImageSourcePropType,
    },

  ]

  