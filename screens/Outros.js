import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  IconButton,
  Checkbox,
  useTheme
} from "react-native-paper";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";

const Outros = ({ navigation }) => {
  const { itensOutros, excluirItem, marcarConcluido } = useContext(ListaCompraContext);
  const theme = useTheme();

  const remover = (id) => {
    excluirItem(id);
  };

  const handleCheckboxToggle = (id, concluido) => {
    marcarConcluido(id, !concluido);
  };


  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action color={theme.colors.accent} icon="arrow-left" onPress={() => navigation.navigate("NovaHome")} />
        <Appbar.Content color={theme.colors.accent} title="Lista de Outros" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        {itensOutros.map((item) => (
          <List.Item
            key={item.id}
            title={item.produto}
            description={`Quantidade: ${item.quantidade}`}
            right={() => (
              <View style={styles.buttonsContainer}>
                <Checkbox
                  uncheckedColor="black" 
                  color="#04ff30"
                  status={item.concluido ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxToggle(item.id, item.concluido)}
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
          icon="plus"
          style={[styles.btnFab, { backgroundColor: theme.colors.secondary }]}
          onPress={() => navigation.navigate("AdicionarOutros")}
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
    flexDirection: 'row',
    alignItems: 'center',
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

export default Outros;
