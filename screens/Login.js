import { View, ScrollView, StyleSheet } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Login</Text>
        <TextInput label="Email" />
        <TextInput label="Senha" secureTextEntry />
        <Button mode="contained" color="black" style={styles.Button}>
          Entrar
        </Button>
        <Button mode="contained" color="black" style={styles.Button}>
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
});
