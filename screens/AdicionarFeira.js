import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Appbar,
  HelperText,
  Button,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";

const AdicionarFeira = ({ navigation }) => {
  const { adicionarItem } = useContext(ListaCompraContext);
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const produtoRole = {
    required: { value: true, message: "Produto é obrigatório" },
    minLength: { value: 2, message: "Produto deve ter pelo menos 2 letras" },
  };
  const quantidadeRole = {
    required: { value: true, message: "Quantidade é obrigatória" },
    min: { value: 1, message: "A quantidade deve ser maior que 0" },
  };

  const onSubmit = (data) => {
    adicionarItem(data.novoProduto, data.novaQuantidade, 'feira');
    navigation.goBack();
  };

  return (
    <ScrollView>
      <Appbar.Header>
      <Appbar.BackAction color={theme.colors.accent} onPress={() => navigation.navigate("NovaHome")} />
        <Appbar.Content color={theme.colors.accent} title="Adicionar Produto na Feira" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <Controller
          control={control}
          rules={produtoRole}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                label="Produto"
                value={value}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
              />
              {errors.novoProduto && (
                <HelperText type="error">
                  {errors.novoProduto.message}
                </HelperText>
              )}
            </View>
          )}
          name="novoProduto"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={quantidadeRole}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                label="Quantidade"
                keyboardType="numeric"
                value={value}
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
              />
              {errors.novaQuantidade && (
                <HelperText type="error">
                  {errors.novaQuantidade.message}
                </HelperText>
              )}
            </View>
          )}
          name="novaQuantidade"
          defaultValue=""
        />
        <Button style={styles.btn} mode="contained" onPress={handleSubmit(onSubmit)}>
          Adicionar
        </Button>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  btn: {
    marginTop: 12,
  }
  
});

export default AdicionarFeira;
