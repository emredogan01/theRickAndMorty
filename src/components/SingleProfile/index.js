import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const SingleProfile = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardImage}>
        <Text style={styles.title}>{data?.name}</Text>
        <View style={styles.imgBorder}>
          <Image
            source={{uri: data?.image}}
            style={styles.Img}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.cardDetail}>
        <Text style={styles.detailText}>Gender: {data?.gender}</Text>
        <Text style={styles.detailText}>Status: {data?.status}</Text>
        <Text style={styles.detailText}>Species: {data?.species}</Text>
        <Text style={styles.detailText}>Location: {data?.location?.name}</Text>
      </View>
      <Text></Text>
    </View>
  );
};

export default SingleProfile;
