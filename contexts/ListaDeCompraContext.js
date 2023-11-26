import React, { createContext, useState } from "react";

const ListaCompraContext = createContext();

const ListaCompraProvider = ({ children }) => {
  const [listaCompras, setListaCompras] = useState([]);

  const adicionarItem = (produto, quantidade) => {
    setListaCompras((prevLista) => {
      const novoItem = { produto, quantidade, concluido: false };
      return [...prevLista, novoItem];
    });
  };

  return (
    <ListaCompraContext.Provider
      value={{
        listaCompras,
        adicionarItem,
      }}
    >
      {children}
    </ListaCompraContext.Provider>
  );
};

export default ListaCompraProvider;
export { ListaCompraContext };
