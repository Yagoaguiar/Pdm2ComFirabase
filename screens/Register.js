import { View, ScrollView, StyleSheet } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInput label="Nome" />
        <TextInput label="Email" />
        <TextInput label="Senha" />
        <Button mode="contained" color="black" style={styles.Button}>Registrar</Button>
        <Button mode="contained" color="red" style={styles.Button}>
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
