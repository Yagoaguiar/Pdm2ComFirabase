import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Appbar, HelperText, Button, TextInput } from "react-native-paper";

const EditarProduto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Editar produto</Text>
        <TextInput label="Editar Produto" />
        <TextInput label="Quantidade" keyboardType={"numeric"} />
        <Button mode="contained" color="blue" style={styles.Button}>
          Adicionar
        </Button>
      </View>
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
