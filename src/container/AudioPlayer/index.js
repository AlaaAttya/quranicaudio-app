import { Component, PropTypes } from 'react';
import {
  TextInput,
  Alert,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Video from 'react-native-video';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/index';
import { baseHeaderStyle } from '../../styles/variables';
import { AudioPlayerStyles } from '../../styles/variables';

// components
import AudioSlider from '../../components/AudioPlayer/AudioSlider';
import PlayButton from '../../components/AudioPlayer/PlayButton';
//import Loader from '../../components/common/Loader';

import { Container, Item } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';



export class AudioPlayer extends Component {
  static navigationOptions = {
    title: 'Playing list',
    header: ({ state, setParams }, defaultHeader) => ({
      ...defaultHeader,
      ...baseHeaderStyle
    })
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log(this.props);
    // this.props.actions.getChapters();
  }

  render() {
    const { navigation, chapters, actions, search } = this.props;
    const { navigate } = navigation;
   

    return (
      <Container>
        <Item style={{ backgroundColor: 'white' }}>
          <Video
              source={{uri: "https://download.quranicaudio.com/quran/abdullaah_alee_jaabir_studio/093.mp3" }}
              volume={1.0}
              muted={false}
              ref="audio"
              style={styles.backgroundVideo}
              resizeMode="cover"
              repeat={false}/>

          <Image
            style={ AudioPlayerStyles.audioImg }
            source={ "http://www.staab-architekten.com/lib/img_bw/3091_thm_ALBwh1.jpg" }/>
          
          
        
              
        </Item>
        <View />
   
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

AudioPlayer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    // chapters: state.chapters.chapters,
    // main: state.main,
    // search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch), dispatch };
}


export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
