import { useContext, React } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import {
  Appbar,
  HelperText,
  Button,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { ListaCompraContext } from "../contexts/ListaDeCompraContext";

const NovaCompra = ({ navigation }) => {
  const { adicionarItem } = useContext(ListaCompraContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Colors } = useTheme();

  const produtoRole = {
    required: { value: true, message: "Produto é obrigatório" },
    minLength: { value: 2, message: "Produto deve ter pelo menos 2 letras" },
    pattern: {
      value: /^[A-Za-zÀ-ú\s]+$/,
      message: "Por favor, insira apenas letras no campo Produto",
    },
  };
  const quantidadeRole = {
    required: { value: true, message: "Quantidade é obrigatória" },
    min: { value: 1, message: "A quantidade deve ser maior que 0" },
  };

  const onSubmit = (data) => {
    adicionarItem(data.novoProduto, data.novaQuantidade);
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction color={Colors.accent} onPress={() => navigation.navigate("Home")} />
        <Appbar.Content />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Adicionar novo produto</Text>
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
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
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
  title: {
    fontSize: 22,
    padding: 8,
    textAlign: "center",
  },
  addBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
  },
});

export default NovaCompra;
