import React, { useContext } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";
import { List, IconButton, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const { itens, excluirItem } = useContext(ListaCompraContext);

  const remover = (id) => {
    excluirItem(id);
    
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <Text style={styles.title}>Lista de Compras</Text>
        {itens.map((item, index) => (
          <List.Item
            key={index}
            title={item.produto}
            description={`Quantidade: ${item.quantidade}`}
            onPress={() =>
              navigation.navigate("EditarProduto", { itemId: item.id })
            }
            right={() => (
              <IconButton icon="delete" onPress={() => remover(item.id)} />
            )}
          />
        ))}
        <FAB
          icon="plus"
          onPress={() => navigation.navigate("NovaCompra")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Home;
