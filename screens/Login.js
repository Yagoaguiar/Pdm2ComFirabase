import { React, useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { AuthContext } from "../contexts/AuthContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { error, login } = useContext(AuthContext);
  

  const handleLogin = () => {
    login(email, senha);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button mode="contained" style={styles.Button} onPress={handleLogin}>
        Entrar
      </Button>
      <Button mode="contained" style={styles.Button} onPress={handleRegister}>
        Criar Conta
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  Button: {
    marginTop: 15,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Login;
