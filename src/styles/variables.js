import { StyleSheet, Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');

export const brandColor = '#161616';
export const baseHeaderStyle = {
  style: {
    backgroundColor: brandColor,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  titleStyle: { color: 'white' },
};

export const AudioPlayerStyles = {
  surahTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  audioImg: {
    marginBottom: 20,
    width: width - 30,
    height: 300
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  }
};
