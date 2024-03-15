import {StyleSheet} from 'react-native';
import {width, height} from '../../styles/screenStyle';
import {themeColor} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  cardImage: {
    width: width - 30,
    height: width - 10,
    backgroundColor: themeColor.yellow,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
  cardDetail: {
    width: width - 30,
    height: width / 1.6 - 10,
    backgroundColor: themeColor.green,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    gap: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  Img: {
    width: width / 1.3 - 10,
    height: width / 1.2 - 10,
  },
  imgBorder: {
    borderWidth: 3,
    borderColor: themeColor.brown,
  },
  detailText: {
    padding: 10,
    backgroundColor: themeColor.purple,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontStyle: 'italic',
    fontWeight: '500',
    color: themeColor.brown,
    fontSize: 17,
  },
});

export default styles;
