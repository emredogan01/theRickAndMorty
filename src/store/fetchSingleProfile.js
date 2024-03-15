import {create} from 'zustand';
import {getRequest} from '../service/verb';
import {CHARACTER_URL} from '../service/urls';
const initialState = {
  singleProfile: null,
  isLoading: false,
  isError: false,
};

export const fetchProfileDetails = create(set => ({
  ...initialState,
  getSingleProfile: async id => {
    set({isLoading: true, isError: false});
    setTimeout(async () => {
      try {
        const response = await getRequest(`${CHARACTER_URL}/${id}`);
        set({isLoading: false, singleProfile: response.data});
      } catch (error) {
        set({isError: true, isLoading: false});
        console.log('Something is wrong!', error);
      }
    }, 1000);
  },
}));
