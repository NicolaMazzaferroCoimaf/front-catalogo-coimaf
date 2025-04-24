import api from '../config/axios';

export const fetchProducts = async (page = 1, perPage = 20) => {
  const response = await api.get('/products', {
    params: {
      page,
      per_page: perPage
    }
  });
  return response.data;
};

export const getProductById = async (code) => {
  const response = await api.get(`/products/${code}`);
  return response.data.data;
};