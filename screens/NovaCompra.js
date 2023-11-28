import React, { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Appbar, HelperText, Button, TextInput } from "react-native-paper";
import { useForm } from 'react-hook-form';
import { ListaCompraContext } from '../contexts/ListaDeCompraContext';

const NovaCompra = ({ navigation }) => {
  const { adicionarItem } = useContext(ListaCompraContext);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      novoProduto: '',
      novaQuantidade: '',
    },
  });

  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleAdicionarItem = () => {
    adicionarItem(produto, quantidade);
    navigation.navigate('Home');
  };

  const produtoRole = {
    required: { value: true, message: "Produto é obrigatório" },
    minLength: { value: 1, message: "Produto deve ter pelo menos 1 letra" },
  };

  const quantidadeRole = {
    required: { value: true, message: 'Quantidade é obrigatória' },
    min: { value: 1, message: 'A quantidade deve ser maior que 0' },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.title}>Adicionar novo produto</Text>
        <TextInput
          label="Produto"
          value={produto}
          onChangeText={(text) => setProduto(text)}
          error={errors.novoProduto ? true : false}
        />
        {errors.novoProduto && (
          <HelperText type="error">{errors.novoProduto.message}</HelperText>
        )}
        <TextInput
          label="Quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={(text) => setQuantidade(text)}
          error={errors.novaQuantidade ? true : false}
        />
        {errors.novaQuantidade && (
          <HelperText type="error">{errors.novaQuantidade.message}</HelperText>
        )}
        <Button
          mode="contained"
          color="blue"
          style={styles.Button}
          onPress={handleSubmit(handleAdicionarItem)}
        >
          Adicionar
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  secondView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    padding: 8,
    textAlign: 'center',
  },
  Button: {
    marginTop: 10,
  },
});

export default NovaCompra;
