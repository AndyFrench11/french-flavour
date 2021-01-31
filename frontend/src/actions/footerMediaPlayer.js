export function showFooterMediaPlayer() {
    return {
      type: 'SHOW_MEDIA_FOOTER_PLAYER',
    }
  }
  
export function hideFooterMediaPlayer() {
  return {
    type: 'HIDE_MEDIA_FOOTER_PLAYER',
  }
}

export function updateCurrentFooterMedia(currentTimeValue, songDuration) {
  return {
    type: 'UPDATE_CURRENT_FOOTER_TIME_VALUE',
    footerMedia: {
      currentTimeValue,
      songDuration
    }
  }

}

export function togglePlaying(isPlaying) {
  return {
    type: 'TOGGLE_PLAYING',
    isPlaying: isPlaying
  }
}

export function generateWaveformHelperFunctions(setVolume, toggleSongPlaying, seekSong) {
  return {
    type: 'GENERATE_WAVEFORM_HELPER_FUNCTIONS',
    setVolume: setVolume,
    toggleSongPlaying: toggleSongPlaying,
    seekSong: seekSong
  }
}
  
