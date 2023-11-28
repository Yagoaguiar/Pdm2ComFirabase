
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Button, TextInput, Text, FAB, HelperText } from "react-native-paper";
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

  const produtoRole = {
    required: { value: true, message: 'Produto é obrigatório' },
    minLength: { value: 2, message: 'Produto deve ter pelo menos 2 letras' },
    pattern: {
      value: /^[A-Za-zÀ-ú\s]+$/, 
      message: 'Por favor, insira apenas letras no campo Produto',
    },
  };
  const quantidadeRole = {
    required: { value: true, message: 'Quantidade é obrigatória' },
    min: { value: 1, message: 'A quantidade deve ser maior que 0' },
  };

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
            <>
              <TextInput
                label="Editar Produto"
                value={value}
                onChangeText={(text) => onChange(text)}
              />
              {errors.novoProduto && (
                <HelperText type="error" visible={true}>
                  {errors.novoProduto.message}
                </HelperText>
              )}
            </>
          )}
          name="novoProduto"
          rules={produtoRole}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                label="Quantidade"
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => onChange(text)}
              />
              {errors.novaQuantidade && (
                <HelperText type="error" visible={true}>
                  {errors.novaQuantidade.message}
                </HelperText>
              )}
            </>
          )}
          name="novaQuantidade"
          rules={quantidadeRole}
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