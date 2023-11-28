// EditarProduto.js

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Button, TextInput, Text } from "react-native-paper";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";
import { useForm, Controller } from "react-hook-form";

const EditarProduto = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { buscar, editarItem } = useContext(ListaCompraContext);
  const itemSelecionado = buscar(itemId);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      novoProduto: itemSelecionado ? itemSelecionado.produto : '',
      novaQuantidade: itemSelecionado ? itemSelecionado.quantidade.toString() : '',
    },
  });

  const onSubmit = (data) => {
    const { novoProduto, novaQuantidade } = data;
    editarItem(itemId, novoProduto, novaQuantidade);
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Editar Produto" />
      </Appbar.Header>
      <View style={styles.content}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Editar Produto"
              value={value}
              onChangeText={(text) => onChange(text)}
            />
          )}
          name="novoProduto"
          rules={{ required: true, minLength: 1 }}
          defaultValue="" // Valor padrão para o campo
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Quantidade"
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => onChange(text)}
            />
          )}
          name="novaQuantidade"
          rules={{ required: true, min: 1 }}
          defaultValue=""
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          Editar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default EditarProduto;
