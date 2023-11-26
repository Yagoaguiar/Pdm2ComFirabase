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
  const excluirItem = (index) => {
    const novaLista = listaCompras.filter((_, i) => i !== index);
    setListaCompras(novaLista);
  };
  

  return (
    <ListaCompraContext.Provider
      value={{
        listaCompras,
        adicionarItem,
        excluirItem,
      }}
    >
      {children}
    </ListaCompraContext.Provider>
  );
};

export default ListaCompraProvider;
export { ListaCompraContext };
