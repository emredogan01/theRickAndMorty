import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const Location = ({data}) => {
  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <View style={styles.wrapper} key={item.id}>
          <Text style={styles.name}>Name: {item.name}</Text>
          <Text style={styles.type}>Type: {item.type}</Text>
          <Text style={styles.dimension}>Dimension: {item.dimension}</Text>
          <Text style={styles.created}>Created: {item.created}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default Location;
