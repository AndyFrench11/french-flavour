export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const text = action.text.trim()
      return [...state, text]
    default:
      return state
  }
}