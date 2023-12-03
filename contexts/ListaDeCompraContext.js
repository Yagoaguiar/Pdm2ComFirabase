import React, { createContext, useState, useEffect } from 'react';
import BuyListService from '../services/BuyListService';

const ListaCompraContext = createContext();

const ListaCompraProvider = ({ children }) => {
  const [itens, setItens] = useState([]);
  const [itensDoMercado, setItensDoMercado] = useState([]);
  const [itensDaFeira, setItensDaFeira] = useState([]);
  const [itensOutros, setItensOutros] = useState([]);

  useEffect(() => {
    const carregarItens = async () => {
      try {
        const listaAtualizada = await BuyListService.listarTodos();
        setItens(listaAtualizada);
        const mercado = listaAtualizada.filter((item) => item.tipo === 'mercado');
        setItensDoMercado(mercado);
        const feira = listaAtualizada.filter((item) => item.tipo === 'feira');
        setItensDaFeira(feira);
        const outros = listaAtualizada.filter((item) => item.tipo === 'outros');
        setItensOutros(outros);
      } catch (error) {
        console.log(error.message);
      }
    };

    carregarItens();
  }, []);

  const adicionarItem = async (produto, quantidade, tipo) => {
    try {
      await BuyListService.adicionarItem(produto, quantidade, tipo);
      const listaAtualizada = await BuyListService.listarTodos();
      setItens(listaAtualizada);
      const mercado = listaAtualizada.filter((item) => item.tipo === 'mercado');
      setItensDoMercado(mercado);
      const feira = listaAtualizada.filter((item) => item.tipo === 'feira');
      setItensDaFeira(feira);
      const outros = listaAtualizada.filter((item) => item.tipo === 'outros');
      setItensOutros(outros);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editarItem = async (id, novoProduto, novaQuantidade, novoTipo) => {
    try {
      await BuyListService.editarItem(id, novoProduto, novaQuantidade, novoTipo);
      const listaAtualizada = await BuyListService.listarTodos();
      setItens(listaAtualizada);
      const mercado = listaAtualizada.filter((item) => item.tipo === 'mercado');
      setItensDoMercado(mercado);
      const feira = listaAtualizada.filter((item) => item.tipo === 'feira');
      setItensDaFeira(feira);
      const outros = listaAtualizada.filter((item) => item.tipo === 'outros');
      setItensOutros(outros);
    } catch (error) {
      console.log(error.message);
    }
  };

  const excluirItem = async (id) => {
    try {
      await BuyListService.excluirItem(id);
      const listaAtualizada = await BuyListService.listarTodos();
      setItens(listaAtualizada);
      const mercado = listaAtualizada.filter((item) => item.tipo === 'mercado');
      setItensDoMercado(mercado);
      const feira = listaAtualizada.filter((item) => item.tipo === 'feira');
      setItensDaFeira(feira);
      const outros = listaAtualizada.filter((item) => item.tipo === 'outros');
      setItensOutros(outros);
    } catch (error) {
      console.log(error.message);
    }
  };

  const marcarConcluido = async (id) => {
    try {
      const itemIndex = itens.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const updatedItens = [...itens];
        updatedItens[itemIndex] = {
          ...updatedItens[itemIndex],
          concluido: !updatedItens[itemIndex].concluido,
        };
  
        setItens(updatedItens);
  
        const mercado = updatedItens.filter((item) => item.tipo === 'mercado');
        setItensDoMercado(mercado);
  
        const feira = updatedItens.filter((item) => item.tipo === 'feira');
        setItensDaFeira(feira);
  
        const outros = updatedItens.filter((item) => item.tipo === 'outros');
        setItensOutros(outros);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextValue = {
    itens,
    itensDoMercado,
    itensDaFeira,
    itensOutros,
    adicionarItem,
    editarItem,
    excluirItem,
    marcarConcluido,
  };

  return (
    <ListaCompraContext.Provider value={contextValue}>
      {children}
    </ListaCompraContext.Provider>
  );
};

export default ListaCompraProvider;
export { ListaCompraContext };
