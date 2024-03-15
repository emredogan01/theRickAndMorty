import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {SearchStatus1} from 'iconsax-react-native';
import {themeColor} from '../../theme/colors';

const SearchBar = ({openSheet, setText, text, handleSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={text}
        style={styles.textInput}
        onChangeText={text => setText(text)}
        keyboardType="default"
        clearButtonMode="always"
        returnKeyType="search"
        onSubmitEditing={() => handleSearch()}
      />
      <TouchableOpacity onPress={() => openSheet()}>
        <SearchStatus1 size="50" variant="Bold" color={themeColor.brown} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
