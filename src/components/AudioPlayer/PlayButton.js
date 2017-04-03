import { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export class PlayButton extends Component {

	render() {
		return <Icon size={70} name={this.props.playing?"ios-pause": "ios-play"} color="#fff" />;
	}
}