import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PizzasItem } from './PizzasCard';
import { pizzas } from '../data/pizzaData';

const alerte = () => {
  alert("Votre pizza a été sélectionnée" );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <ScrollView >
        {
            pizzas.map((pizza, index) => (
                <PizzasItem
                    key={index}
                    nomPizza={pizza.nomPizza}
                    taillePizza={pizza.taillePizza}
                    basePizza={pizza.basePizza}
                    ingredientsPizza={pizza.ingredientsPizza}
                    prixPizza={pizza.prixPizza}
                    onPress={() => alerte}
               />
            ))
        }
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
