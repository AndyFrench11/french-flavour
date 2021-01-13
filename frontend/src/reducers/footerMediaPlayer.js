export default function footerMediaPlayer(state = {footerMediaPlayerVisible: false}, action) {
    switch (action.type) {
        case 'SHOW_MEDIA_FOOTER_PLAYER':
            return { ...state, footerMediaPlayerVisible: true }
        case 'HIDE_MEDIA_FOOTER_PLAYER':
          return { ...state, footerMediaPlayerVisible: false }
        default:
          return state
      }
    }