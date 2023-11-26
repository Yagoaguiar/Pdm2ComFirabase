import React, { createContext, useState } from 'react';

const ListaCompraContext = createContext();

const ListaCompraProvider = ({ children }) => {
  const [listaCompras, setListaCompras] = useState([]);

  const adicionarItem = (produto, quantidade) => {
    setListaCompras(prevLista => {
      const novoItem = { produto, quantidade, concluido: false };
      return [...prevLista, novoItem];
    });
  };

  const marcarConcluido = (index) => {
    const novaLista = [...listaCompras];
    novaLista[index].concluido = true;
    setListaCompras(novaLista);
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
        marcarConcluido,
        excluirItem,
      }}
    >
      {children}
    </ListaCompraContext.Provider>
  );
};

export default ListaCompraProvider;
export { ListaCompraContext };
