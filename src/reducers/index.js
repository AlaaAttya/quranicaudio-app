import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';
import reciters from './reciters';
import chapters from './chapters';
import search from './search';
import surahs from './surahs';
import AudioPlayer from './AudioPlayer';

export default AppNavigator =>
combineReducers({
    main,
    reciters,
    chapters,
    search,
    surahs,
    navigation: navigation(AppNavigator)
});
