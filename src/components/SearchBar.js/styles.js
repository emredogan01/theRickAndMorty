import {Button, StyleSheet} from 'react-native';
import {themeColor} from '../../theme/colors';
import {width} from '../../styles/screenStyle';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themeColor.yellow,
    paddingLeft: 10,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 7,
    height: width * 0.15,
  },
  textInput: {
    width: width / 1.13 - 20,
  },
});

export default styles;
