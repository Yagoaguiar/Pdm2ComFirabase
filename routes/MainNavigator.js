import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";

import EditarProduto from "../screens/Editar";
import Login from "../screens/Login";
import NovaCompra from "../screens/NovaCompra";
import Register from "../screens/Register";
import NovaHome from "../screens/NovaHome";
import Mercado from "../screens/Mercado";
import AdicionarMercado from "../screens/AdicionarMercado";
import AdicionarFeira from "../screens/AdicionarFeira";
import Feira from "../screens/Feira";
import AdicionarOutros from "../screens/AdicionarOutros";
import Outros from "../screens/Outros";



const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    backgroud: "#c90076",
    primary: "#FE9D1F", // principal 
    secondary: "#18d2ea", //azul, pastas e botões
    onBackground: "#f3f32",
    accent: "#ffff",
    danger: "#FA3415",
    tertiary: "#04ff30",
    unchecked: "#00000"
  },
};

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  const { usuario } = useContext(AuthContext);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {!usuario.logado ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} options={{ title: 'Cadastre-se' }}/>
            </>
          ) : (
            <>
              <Stack.Screen
                name="NovaHome"
                component={NovaHome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Mercado"
                component={Mercado}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AdicionarMercado"
                component={AdicionarMercado}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditarProduto"
                component={EditarProduto}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NovaCompra"
                component={NovaCompra}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AdicionarFeira"
                component={AdicionarFeira}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Feira"
                component={Feira}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Outros"
                component={Outros}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AdicionarOutros"
                component={AdicionarOutros}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default MainNavigator;
