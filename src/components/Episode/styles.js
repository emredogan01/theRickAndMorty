import {StyleSheet} from 'react-native';
import {themeColor} from '../../theme/colors';
import {width} from '../../styles/screenStyle';

const styles = StyleSheet.create({
  container: {padding: 10},
  button: {
    backgroundColor: themeColor.purple,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 5,
    width: width * 0.2,
    height: width * 0.1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: themeColor.brown,
    fontSize: 16,
    fontWeight: '700',
  },
  name: {
    color: themeColor.yellow,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 3,
  },
  episode: {
    color: themeColor.pink,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  date: {
    fontSize: 20,
    color: themeColor.green,
    textAlign: 'center',
    marginTop: 5,
  },
  created: {
    textAlign: 'center',
    color: themeColor.purple,
    fontWeight: '900',
    fontSize: 11,
    marginTop: 5,
  },
});

export default styles;
