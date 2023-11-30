import { useContext, React  } from "react";
import { List } from 'react-native-paper';



const NovaHome  = ({ navigation}) => (
  <List.Section>
    <List.Subheader>Lista de Compra</List.Subheader>
    <List.Item
      title="Mercado"
      onPress={() => navigation.navigate("Home")}
      left={() => <List.Icon icon="folder" />}
    />
    <List.Item
      title="Feira"
      onPress={() => navigation.navigate("Home")}
      left={() => <List.Icon icon="folder" />}
    />
    <List.Item
      title="Outro"
      onPress={() => navigation.navigate("Home")}
      left={() => <List.Icon icon="folder" />}
    />
  </List.Section>
  
);

export default NovaHome;