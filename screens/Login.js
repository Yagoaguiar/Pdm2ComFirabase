import { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import ListaCompraProvider from '../contexts/ListaDeCompraContext';
import { AuthContext } from '../contexts/AuthContext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login, error } = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Login</Text>

        <HelperText type="error" visible={true} style={styles.error}>{error}</HelperText>

        <TextInput
          label="Email"
          onChangeText={(text) => {
            setEmail(text);
          }} />

        <TextInput label="Senha"
          secureTextEntry
          onChangeText={(text) => {
            setSenha(text);
          }} />

        <Button mode="contained"
          onPress={() => {
            login(email, senha);
          }}>
          Entrar
        </Button>

        <Button mode="contained" color="black" style={styles.Button}
          onPress={() => navigation.navigate('Register')}>
          Criar Conta
        </Button>
      </View>
    </View>
  );
};
export default Login;

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
  error: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20
  }
});
