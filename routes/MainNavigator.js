import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Editar from "../screens/Editar";
import Login from "../screens/Login";
import NovaCompra from "../screens/Editar";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Editar" component={Editar} />
        <Stack.Screen name="Nova Compra" component={NovaCompra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
