import {StyleSheet} from 'react-native';
import {themeColor} from '../../theme/colors';
import {width} from '../../styles/screenStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  wrapper: {
    backgroundColor: themeColor.green,
    padding: 10,
    borderRadius: 10,
    width: '100%',
    height: width * 0.5,
    marginTop: 20,
    justifyContent: 'center',
  },
  name: {
    color: themeColor.brown,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 10,
  },
  type: {
    color: themeColor.purple,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 10,
    fontSize: 20,
    textShadowColor: themeColor.brown,
  },
  dimension: {
    color: themeColor.yellow,
    marginTop: 2,
    fontWeight: '900',
    fontSize: 16,
    textShadowColor: themeColor.bgColor,
    marginTop: 10,
  },
  created: {
    color: themeColor.green,
    fontWeight: '900',
    color: themeColor.bgColor,
    marginTop: 5,
    fontSize: 16,
    marginTop: 10,
  },
});

export default styles;
