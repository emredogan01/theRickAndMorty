import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import fetchComponent from '../../store/fetchProfiles.js';
import ProfileCard from '../../components/ProfileCard/index.js';
import Loading from '../../components/Loading/index.js';
import styles from './styles.js';
import SearchBar from '../../components/SearchBar.js/index.js';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {themeColor} from '../../theme/colors.js';
import {statusOptions} from '../../utils/status.js';
import {genderOptions} from '../../utils/status.js';

const Characters = () => {
  const getData = fetchComponent(store => store.getProfiles);
  const profiles = fetchComponent(store => store.profiles);
  const isLoading = fetchComponent(store => store.isLoading);
  const filteredStatus = fetchComponent(store => store.getStatus);
  const getSearchName = fetchComponent(store => store.getSearch);
  const filteredGender = fetchComponent(store => store.getGender);
  const bottomSheet = useRef();
  const [status, setStatus] = useState({});
  const [gender, setGender] = useState({});
  const [text, setText] = useState(null);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSearch = () => {
    if (text) {
      getSearchName(text);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View>
            <FlatList
              ListHeaderComponent={
                <SearchBar
                  openSheet={() => bottomSheet.current.show()}
                  text={text}
                  setText={setText}
                  handleSearch={handleSearch}
                />
              }
              numColumns={2}
              data={profiles}
              renderItem={({item}) => <ProfileCard item={item} />}
              keyExtractor={item => '_' + item.id}
            />
          </View>
          <BottomSheet
            hasDraggableIcon
            sheetBackgroundColor={themeColor.purple}
            ref={bottomSheet}
            height={450}
            onRequestClose={() => {
              bottomSheet.current.close();
            }}>
            <View style={styles.modal}>
              {statusOptions.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.status,
                    {
                      backgroundColor:
                        status === item.value
                          ? `${themeColor.green}`
                          : `${themeColor.brown}`,
                    },
                  ]}
                  onPress={() => setStatus(item.value)}>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.modal2}>
              {genderOptions.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.status2,
                    {
                      backgroundColor:
                        gender === item.value
                          ? `${themeColor.green}`
                          : `${themeColor.brown}`,
                    },
                  ]}
                  onPress={() => setGender(item.value)}>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.filterBtn}
              onPress={() => {
                filteredStatus(status, text);
                filteredGender(status, text, gender);
                bottomSheet.current.close();
              }}>
              <Text style={styles.textBtn}>Filter</Text>
            </TouchableOpacity>
          </BottomSheet>
        </>
      )}
    </View>
  );
};

export default Characters;
