import React, { useContext } from "react";
import { List, Appbar, useTheme } from 'react-native-paper';
import { AuthContext } from "../contexts/AuthContext";



const NovaHome = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const theme = useTheme();


  const handleExit = () => {
    logout();
  };

  
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={'Bem-vindo!'} color={theme.colors.accent} />
        <Appbar.Action icon="logout" onPress={handleExit} color={theme.colors.accent}/>
      </Appbar.Header>
      <List.Section>
        <List.Subheader>Lista de Compra</List.Subheader>
        <List.Item
          title="Mercado"
          onPress={() => navigation.navigate("Mercado")}
          left={() => <List.Icon icon="folder" color={theme.colors.secondary}  />}
        />
        <List.Item
          title="Feira"
          onPress={() => navigation.navigate("Feira")}
          left={() => <List.Icon icon="folder" color={theme.colors.secondary} />}
        />
        <List.Item
          title="Outros"
          onPress={() => navigation.navigate("Outros")}
          left={() => <List.Icon icon="folder" color={theme.colors.secondary}  />}
        />
      </List.Section>
    </>
  );
};


export default NovaHome;
