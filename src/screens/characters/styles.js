import {StyleSheet} from 'react-native';
import {themeColor} from '../../theme/colors';
import {width} from '../../styles/screenStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.bgColor,
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  modal2: {
    flexShrink: 1,
    justifyContent: 'space-around',
    marginTop: 20,
    gap: 10,
    margin: 'auto',
    padding: 10,
  },
  status: {
    justifyContent: 'center',
    height: width * 0.12,
    backgroundColor: themeColor.brown,
    borderRadius: 10,
    width: 110,
  },
  status2: {
    justifyContent: 'center',
    height: width * 0.12,
    backgroundColor: themeColor.brown,
    borderRadius: 10,
  },
  text: {
    color: themeColor.yellow,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  filterBtn: {
    width: '90%',
    height: width * 0.12,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    borderRadius: 10,
    padding: 10,
  },
  textBtn: {
    color: themeColor.bgColor,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
