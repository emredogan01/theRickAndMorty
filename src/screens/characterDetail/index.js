import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Loading from '../../components/Loading';
import styles from './styles';
import SingleProfile from '../../components/SingleProfile';
import {fetchProfileDetails} from '../../store/fetchSingleProfile';

const CharacterDetail = ({route}) => {
  const {item} = route?.params;

  const singleProfile = fetchProfileDetails(store => store.getSingleProfile);
  const singleData = fetchProfileDetails(store => store.singleProfile);
  const dataIsLoading = fetchProfileDetails(store => store.isLoading);

  useEffect(() => {
    singleProfile(item);
  }, [item]);

  return (
    <View style={styles.container}>
      {dataIsLoading ? <Loading /> : <SingleProfile data={singleData} />}
    </View>
  );
};

export default CharacterDetail;
