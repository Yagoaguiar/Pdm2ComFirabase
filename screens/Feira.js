import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  IconButton,
  Checkbox,
  useTheme,
  Colors,
} from "react-native-paper";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";

const Feira = ({ navigation }) => {
  const { itensDaFeira, excluirItem, marcarConcluido } =
    useContext(ListaCompraContext);

  const remover = (id) => {
    excluirItem(id);
  };

  const handleCheckboxToggle = (id, concluido) => {
    marcarConcluido(id, !concluido);
  };
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action
          icon="arrow-left"
          color={theme.colors.accent}
          onPress={() => navigation.navigate("NovaHome")}
        />
        <Appbar.Content title="Lista da Feira" color={theme.colors.accent} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        {itensDaFeira.map((item) => (
          <List.Item
            key={item.id}
            title={item.produto}
            description={`Quantidade: ${item.quantidade}`}
            right={() => (
              <View style={styles.buttonsContainer}>
                <Checkbox
                  uncheckedColor="black"
                  color="#04ff30"
                  status={item.concluido ? "checked" : "unchecked"}
                  onPress={() => handleCheckboxToggle(item.id, item.concluido)}
                  style={{ marginRight: 18 }} 
                />
                <IconButton
                  icon="delete"
                  color="red"
                  onPress={() => remover(item.id)}
                />
              </View>
            )}
            onPress={() => handleCheckboxToggle(item.id, item.concluido)}
            style={styles.listItem}
          />
        ))}
        <IconButton
          style={[styles.btnFab, { backgroundColor: theme.colors.secondary }]}
          color={theme.colors.accent}
          icon="plus"
          onPress={() => navigation.navigate("AdicionarFeira")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnFab: {
    position: "absolute",
    right: 15,
    bottom: 20,
    margin: 16,
  },
  listItem: {
    paddingVertical: 10,
  },
});

export default Feira;
