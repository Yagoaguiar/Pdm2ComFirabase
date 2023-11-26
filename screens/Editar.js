import { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet} from "react-native";
import { Appbar, HelperText, Button, TextInput, Text } from "react-native-paper";
import { ListaCompraContext } from '../contexts/ListaDeCompraContext'



const EditarProduto = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.secondView}>
        <Text style={styles.title}>Editar produto</Text>
        <TextInput label="Editar Produto" />
        <TextInput label="Quantidade" keyboardType={"numeric"} />
        <Button mode="contained" color="blue" style={styles.Button}>
          Adicionar
        </Button>
      </ScrollView>
    </View>
  );
};
export default EditarProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  secondView: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    padding: 8,
    textAlign: "center",
  },
  label: {
    color: "red",
  },
  Button: {
    marginTop: 10,
  },
});
