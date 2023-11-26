import { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import ListaCompraProvider from '../contexts/ListaDeCompraContext';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInput label="Nome" />
        <TextInput label="Email" />
        <TextInput label="Senha" secureTextEntry />
        <Button
          mode="contained"
          color="black"
          style={styles.Button}
          onPress={() => navigation.navigate("Home")}
        >
          Registrar
        </Button>
        <Button
          mode="contained"
          color="red"
          style={styles.Button}
          onPress={() => navigation.navigate("Login")}
        >
          Voltar
        </Button>
      </View>
    </View>
  );
};
export default Register;

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
