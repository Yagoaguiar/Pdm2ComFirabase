import axios from 'axios';

const BASE_URL = 'https://mobile-502d2-default-rtdb.firebaseio.com/';

const BuyListService = {
  listarTodos: async () => {
    try {
      const contatos = [];
      const response = await axios.get(`${BASE_URL}/itens.json`);
      for (const key in response.data) {
        contatos.push({ id: key, ...response.data[key] });
      }
      return contatos;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao listar os itens da compra.');
    }
  },

  listarPeloId: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/itens/${id}.json`);
      return { id, ...response.data };
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao listar o item pelo ID.');
    }
  },

  adicionarItem: async (produto, quantidade, tipo) => {
    try {
      await axios.post(`${BASE_URL}/itens.json`, {
        produto,
        quantidade,
        tipo,
        concluido: false,
      });
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao adicionar um novo item.');
    }
  },

  editarItem: async (id, novoProduto, novaQuantidade, novoTipo) => {
    try {
      await axios.put(`${BASE_URL}/itens/${id}.json`, {
        produto: novoProduto,
        quantidade: novaQuantidade,
        tipo: novoTipo,
      });
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao editar o item.');
    }
  },

  excluirItem: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/itens/${id}.json`);
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao excluir o item.');
    }
  },
};

export default BuyListService;
