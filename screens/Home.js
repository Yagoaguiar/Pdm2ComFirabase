import React, { useContext } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";
import {
  List,
  IconButton,
  FAB,
  Colors,
  useTheme,
  Appbar,
} from "react-native-paper";

const Home = ({ navigation }) => {
  const { itens, excluirItem } = useContext(ListaCompraContext);

  const { Colors } = useTheme();
  const remover = (id) => {
    excluirItem(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
      <Appbar.Action  onPress={() => navigation.navigate("NovaHome")} />
        <Appbar.Content title="Compras" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        {itens.map((item, index) => (
          <List.Item
            key={index}
            title={item.produto}
            description={`Quantidade: ${item.quantidade}`}
            onPress={() =>
              navigation.navigate("EditarProduto", { itemId: item.id })
            }
            right={() => (
              <IconButton icon="delete" color="red" onPress={() => remover(item.id)} />
            )}
            style={styles.listItem} 
          />
        ))}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.btnFab}
        onPress={() => navigation.navigate("NovaCompra")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 60,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  btnFab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
  },
  listItem: {
    paddingVertical: 10,
  },
});

export default Home;
