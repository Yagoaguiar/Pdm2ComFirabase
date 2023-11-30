import React, { useContext } from "react";
import { List, Appbar } from 'react-native-paper';
import { AuthContext } from "../contexts/AuthContext";



const NovaHome = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const usuarioNome = "Yago"
  const handleLogout = () => {
    logout();
    navigation.navigate('login'); 
  };

  
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={`Bem-vindo ${usuarioNome}!`} />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Appbar.Header>
      <List.Section>
        <List.Subheader>Lista de Compra</List.Subheader>
        <List.Item
          title="Mercado"
          onPress={() => navigation.navigate("Mercado")}
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Feira"
          onPress={() => navigation.navigate("Feira")}
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Outros"
          onPress={() => navigation.navigate("Outros")}
          left={() => <List.Icon icon="folder" />}
        />
      </List.Section>
    </>
  );
};

export default NovaHome;
