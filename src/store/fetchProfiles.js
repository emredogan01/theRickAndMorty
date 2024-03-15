import {create} from 'zustand';
import {getRequest} from '../service/verb';
import {CHARACTER_URL} from '../service/urls';

const initialState = {
  profiles: [],
  isLoading: false,
  isError: false,
};

const fetchComponent = create(set => ({
  ...initialState,
  getProfiles: async () => {
    set({isLoading: true, isError: false});

    try {
      const response = await getRequest(CHARACTER_URL);
      set({isLoading: false, profiles: response.data.results});
    } catch (error) {
      set({isError: true, isLoading: false});
      console.log('Error fetching profiles:', error);
    }
  },
  getStatus: async (status, search) => {
    set({isError: false});

    try {
      const response = await getRequest(CHARACTER_URL, {
        status: status,
        name: search,
      });
      set({profiles: response.data.results});
    } catch (error) {
      set({isError: true});
      console.log(`Error fetching profiles with status '${status}':`, error);
    }
  },
  getGender: async (status, search, gender) => {
    set({isError: false});

    try {
      const response = await getRequest(CHARACTER_URL, {
        status: status,
        name: search,
        gender: gender,
      });
      set({profiles: response.data.results});
    } catch (error) {
      set({isError: true});
      console.log(`Error fetching profiles with status '${gender}':`, error);
    }
  },
  getSearch: async searchTerm => {
    set({isError: false});

    try {
      const response = await getRequest(CHARACTER_URL, {name: searchTerm});
      set({profiles: response.data.results});
    } catch (error) {
      set({isError: true});
      console.log(
        `Error fetching profiles with search term '${searchTerm}':`,
        error,
      );
    }
  },
}));

export default fetchComponent;
