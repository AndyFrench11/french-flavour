
import { combineReducers } from 'redux'
import counter from './counter';
import todo from './todo';
import footerMediaPlayer from './footerMediaPlayer';

export default combineReducers({
    counter,
    todo,
    footerMediaPlayer
})