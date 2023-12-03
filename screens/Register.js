import { useContext, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import { AuthContext } from "../contexts/AuthContext";

const Register = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { error, register } = useContext(AuthContext);


  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    register(nome, email, senha);
  };


  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
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
        <Button mode="contained" style={styles.Button} onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          mode="contained"
          style={styles.Button}
          onPress={handleLogin}
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
  Button: {
    marginTop: 10,
  },
});
