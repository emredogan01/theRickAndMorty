import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {episodesComponents} from '../../store/fetchEpisodes';
import Loading from '../../components/Loading';
import Episode from '../../components/Episode';

const Episodes = () => {
  const firstEpisode = episodesComponents(store => store.getEpisodes);
  const isLoading = episodesComponents(store => store.isLoading);
  const episode = episodesComponents(store => store.episodes);

  useEffect(() => {
    firstEpisode(2);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : <Episode data={episode} />}
    </View>
  );
};

export default Episodes;
