import {create} from 'zustand';
import {getRequest} from '../service/verb';
import {EPISODE_URL, CHARACTER_URL} from '../service/urls';

const initialState = {
  episodes: [],
  singleEpisode: [],
  isLoading: false,
  isError: false,
};

export const episodesComponents = create(set => ({
  ...initialState,
  getEpisodes: async () => {
    set({isLoading: true, isError: false});
    try {
      const response = await getRequest(EPISODE_URL);
      set({isLoading: false, episodes: response.data, results: response.data});
    } catch (error) {
      set({isError: true, isLoading: false});
      console.log('Something is wrong!', error);
    }
  },
  getSingleEpisode: async (episodeNumber = 1) => {
    try {
      let url = EPISODE_URL;
      if (episodeNumber) {
        url += `/${episodeNumber}`;
      }
      const response = await getRequest(url);
      set({
        singleEpisodes: response.data,
        results: response.data,
      });
    } catch (error) {
      console.log('Something is wrong!', error);
    }
  },
}));
