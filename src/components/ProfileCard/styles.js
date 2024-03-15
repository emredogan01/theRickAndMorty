import {StyleSheet} from 'react-native';
import {width, height} from '../../styles/screenStyle';
import {themeColor} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2 - 10,
    height: width / 2 - 10,
    overflow: 'hidden',
    borderRadius: 4,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    bottom: 0,
    color: themeColor.brown,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: themeColor.green,
    padding: 2,
  },
  wrapper: {
    padding: 7,
  },
  rightIcon: {
    position: 'absolute',
    top: 0,
    right: 2,
    zIndex: 123,
  },
});

export default styles;
