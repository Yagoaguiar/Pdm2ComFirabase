import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";

import Home from "../screens/Home";
import EditarProduto from "../screens/Editar";
import Login from "../screens/Login";
import NovaCompra from "../screens/NovaCompra";
import Register from "../screens/Register";

import { AuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user.logado ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EditarProduto" component={EditarProduto} />
            <Stack.Screen name="NovaCompra" component={NovaCompra} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
