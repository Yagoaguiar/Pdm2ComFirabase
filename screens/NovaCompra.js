import { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet} from "react-native";
import { Appbar, HelperText, Button, TextInput, Text  } from "react-native-paper";
import ListaCompraProvider, { ListaCompraContext } from '../contexts/ListaDeCompraContext';


const NovaCompra = ({ navigation }) => {
  const { adicionarItem } = useContext(ListaCompraContext);

  const [produto, setProduto] = useState(''); // Estado para armazenar o produto
  const [quantidade, setQuantidade] = useState(''); // Estado para armazenar a quantidade

  const handleAdicionarItem = () => {
    adicionarItem(produto, quantidade);
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Adicionar novo produto</Text>
        <TextInput
          label="Produto"
          value={produto}
          onChangeText={(text) => setProduto(text)}
        />
        <TextInput
          label="Quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={(text) => setQuantidade(text)}
        />
        <Button
          mode="contained"
          color="blue"
          style={styles.Button}
          onPress={handleAdicionarItem} 
        >
          Adicionar
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  secondView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    padding: 8,
    textAlign: 'center',
  },
  label: {
    color: 'red',
  },
  Button: {
    marginTop: 10,
  },
});

export default NovaCompra;