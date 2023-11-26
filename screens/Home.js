import { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { FAB, List, IconButton } from "react-native-paper";

import { ListaCompraContext } from '../contexts/ListaDeCompraContext';

const Home = ({ navigation }) => {
  const { listaCompras, excluirItem } = useContext(ListaCompraContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lista de Compras</Text>
        {listaCompras.map((item, index) => (
          <List.Item
            key={index}
            title={item.produto}
            description={`Quantidade: ${item.quantidade}`}
            right={() => (
              <IconButton
                icon="delete"
                onPress={() => remover(excluirItem)} 
              />
            )}
            style={styles.item}
          />
        ))}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('NovaCompra')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 14,
    bottom: 32,
    margin: 16,
  },
  list: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});