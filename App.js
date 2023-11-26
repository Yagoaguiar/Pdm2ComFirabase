import MainNavigator from "./routes/MainNavigator";
import ListaCompraProvider from "./contexts/ListaDeCompraContext";


const App = () => (

      <ListaCompraProvider>
      <MainNavigator />
      </ListaCompraProvider>


);

export default App;