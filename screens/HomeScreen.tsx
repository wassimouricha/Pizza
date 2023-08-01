import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { PizzasItem } from '../components/PizzasCard';
import { pizzas } from '../data/pizzaData';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{}}>
        {
            pizzas.map((pizza, index) => (
                <PizzasItem
                    key={index}
                    nomPizza={pizza.nomPizza}
                    taillePizza={pizza.taillePizza}
                    basePizza={pizza.basePizza}
                    ingredientsPizza={pizza.ingredientsPizza}
                    prixPizza={pizza.prixPizza}
                    imagePizza={pizza.imagePizza}
                    onPress={() => {}}
               />
            ))
        }
        </View>
        </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
