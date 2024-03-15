import {Text, Pressable, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {ArrowCircleRight} from 'iconsax-react-native';
import {themeColor} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';

const ProfileCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.wrapper}
      onPress={() => navigation.navigate(CHARACTERDETAIL, {item: item.id})}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode="cover"
        style={styles.container}>
        <ArrowCircleRight
          style={styles.rightIcon}
          size="36"
          color={themeColor.green}
          variant="Bulk"
        />
        <Text style={styles.text}>{item.name}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default ProfileCard;
