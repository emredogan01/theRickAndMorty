import {create} from 'zustand';
import {LOCATION_URL} from '../service/urls';
import {getRequest} from '../service/verb';

const initialState = {
  locations: [],
  isLoading: false,
  isError: false,
};

export const locationComponent = create(set => ({
  ...initialState,
  getLocations: async () => {
    set({isLoading: true});
    try {
      const response = await getRequest(LOCATION_URL);
      set({isLoading: false, locations: response.data.results});
    } catch (error) {
      set({isLoading: false, isError: true});
      console.log('Something is wrong!', error);
    }
  },
}));
