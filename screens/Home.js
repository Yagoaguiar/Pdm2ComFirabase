import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <FAB icon={"plus"} style={styles.fab} 
      onPress={() => navigation.navigate('NovaCompra')}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 14,
    bottom: 32,
    margin: 16,
  },
});
