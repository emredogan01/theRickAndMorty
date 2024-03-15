import {axiosClient} from './instance';

export const getRequest = async (URL, params) => {
  const response = await axiosClient.get(`${URL}`, {params: params});
  return response;
};
