export default function footerMediaPlayer(state = {
    footerMediaPlayerVisible: false, 
    footerMedia: null, 
    isPlaying: false, 
    setVolume: null, 
    toggleSongPlaying: null,
    seekSong: null
  }, action) {
    switch (action.type) {
        case 'SHOW_MEDIA_FOOTER_PLAYER':
            return { ...state, footerMediaPlayerVisible: true }
        case 'HIDE_MEDIA_FOOTER_PLAYER':
          return { ...state, footerMediaPlayerVisible: false }
        case 'UPDATE_CURRENT_FOOTER_TIME_VALUE':
          return { ...state, footerMedia: action.footerMedia }
        case 'TOGGLE_PLAYING':
          return { ...state, isPlaying: action.isPlaying }
        case 'GENERATE_WAVEFORM_HELPER_FUNCTIONS':
          return {...state, setVolume: action.setVolume, toggleSongPlaying: action.toggleSongPlaying, seekSong: action.seekSong}
        default:
          return state
      }
    }