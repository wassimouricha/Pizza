import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PizzasProps {
  nomPizza: string;
  taillePizza: string;
  basePizza: string;
  ingredientsPizza: string;
  prixPizza: number;
  onPress: () => void;
}

export const PizzasItem: React.FC<PizzasProps> = ({
  nomPizza,
  taillePizza,
  basePizza,
  ingredientsPizza,
  prixPizza,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{nomPizza}</Text>
      </View>
      <View style={{flexDirection:'row' , justifyContent:"space-between"}}>
        <View>
        <Text style={styles.infoText}>Taille: {taillePizza}</Text>
      <Text style={styles.infoText}>Base: {basePizza}</Text>
        </View>
      <View>
        <Text style={styles.priceText}>{prixPizza}</Text>
        </View>
      </View>

      <Text style={styles.infoText}>Ingrédients: {ingredientsPizza}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FF0000",
    borderRadius: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000000",
  },
  infoText: {
    color: "#808080",
    marginBottom: 5,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FF0000", 
    marginTop: 20,
    borderRadius: 10, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PizzasItem;
