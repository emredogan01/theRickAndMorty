import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';

const EpisodeCard = ({data}) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const characterDataPromises = data.map(async url => {
        const response = await fetch(url);
        const character = await response.json();
        return character;
      });

      const characterData = await Promise.all(characterDataPromises);
      setCharacters(characterData);
    };

    fetchCharacterData();
  }, [data]);

  return (
    <ScrollView
      horizontal={true}
      style={{
        height: 335,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {characters.map((item, index) => (
          <Image
            key={index}
            source={{uri: item?.image}}
            style={{
              width: 260,
              height: 260,
              borderRadius: 10,
              marginRight: 20,
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default EpisodeCard;
