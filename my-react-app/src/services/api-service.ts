import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export type ProductT = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const getProducts = async () => {
  try {
    const data: ProductT[] = await axiosInstance.get('/products?limit=15');
    return data;
  } catch (error) {
    console.error(`Error fetching books: ${error}`);
    return [];
  }
};
