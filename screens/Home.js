import { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { FAB } from "react-native-paper";

import { ListaCompraContext } from '../contexts/ListaDeCompraContext';

const Home = ({ navigation }) => {
  const { listaCompras } = useContext(ListaCompraContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lista de Compras</Text>
        {listaCompras.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{item.produto}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
          </View>
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
    position: "absolute",
    right: 14,
    bottom: 32,
    margin: 16,
  },
});
