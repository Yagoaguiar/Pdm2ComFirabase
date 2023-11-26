import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import EditarProduto from "../screens/Editar";
import Login from "../screens/Login";
import NovaCompra from "../screens/NovaCompra";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditarProduto" component={EditarProduto} />
        <Stack.Screen name="NovaCompra" component={NovaCompra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
