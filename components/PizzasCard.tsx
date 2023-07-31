import { View,Text ,Button} from "react-native";



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
      <View style={{width:250, height:200 , backgroundColor:"FF0000" , borderRadius:50 , display:'flex'}}>
        <View style={{ flexDirection:'row' , alignItems:'flex-start' , backgroundColor:"#00000" , borderRadius:20}}>
        <Text style={{fontSize: 20 , fontWeight:'800' , color:"ffffff"}}>{nomPizza}</Text>
        </View>
        <Text >{taillePizza}</Text>
        <Text >{basePizza}</Text>
        <Text >{ingredientsPizza}</Text>
        <Text >{prixPizza}</Text>
        <Button title="Ajouter" onPress={onPress} />
      </View>
    );
    }
    