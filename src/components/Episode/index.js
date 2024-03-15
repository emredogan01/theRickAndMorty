import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {episodesComponents} from '../../store/fetchEpisodes';
import {height} from '../../styles/screenStyle';
import EpisodeCard from '../EpisodeCard';

const Episode = ({data}) => {
  const singleEpisode = episodesComponents(store => store.getSingleEpisode);
  const episode = episodesComponents(store => store.singleEpisodes);

  const renderButton = ({item}) => (
    <TouchableOpacity
      onPress={() => handleButtonPress(item)}
      style={styles.button}>
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );
  const handleButtonPress = item => {
    singleEpisode(item);
  };
  useEffect(() => {
    singleEpisode();
  }, []);

  const generateNumbersArray = () => {
    const count = data.info?.count;
    const numbers = [];
    for (let i = 1; i <= count; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={generateNumbersArray()}
        renderItem={renderButton}
        keyExtractor={item => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height: height * 0.08}}
      />
      <View style={{marginTop: 25}}>
        <Text numberOfLines={2} style={styles.name}>
          {episode?.name}
        </Text>
        <Text style={styles.episode}>{episode?.episode}</Text>
        <Text style={styles.date}>{episode?.air_date}</Text>
        <Text style={styles.created}>{episode?.created}</Text>
      </View>
      <EpisodeCard data={episode?.characters} />
    </View>
  );
};

export default Episode;
