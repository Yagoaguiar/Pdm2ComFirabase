import MainNavigator from "./routes/MainNavigator";
import ListaCompraProvider from "./contexts/ListaDeCompraContext";
import AuthProvider from "./contexts/AuthContext";

const App = () => (
  <AuthProvider>
    <ListaCompraProvider>
      <MainNavigator />
    </ListaCompraProvider>
  </AuthProvider>
);

export default App;
