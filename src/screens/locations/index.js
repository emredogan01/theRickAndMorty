import {View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {locationComponent} from '../../store/fetchLocations';
import Loading from '../../components/Loading';
import Location from '../../components/Location';

const Locations = () => {
  const loading = locationComponent(store => store.isLoading);
  const getState = locationComponent(store => store.getLocations);
  const data = locationComponent(store => store.locations);
  useEffect(() => {
    getState();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : <Location data={data} />}
    </View>
  );
};

export default Locations;
