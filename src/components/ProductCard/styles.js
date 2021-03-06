import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  card: {
    height: 200,
    width: 160,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    resizeMode: 'contain',
    zIndex: 13,
    height: 110,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: COLORS.dark,
  },
});
