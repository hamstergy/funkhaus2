export const state = () => ({
  menuOpened: false,
  title: '',
  winHeight: 0,
  winWidth: 0,
})

export const mutations = {
  SET_MENU(state, data) {
    state.menuOpened = data
  },
  SET_TITLE(state, data) {
    state.title = data
  },
  SET_WIN_DIMENSIONS(state, dimensions) {
    state.winHeight = dimensions.height
    state.winWidth = dimensions.width
  },
  SET_S_TOP(state, pos) {
    state.sTop = pos
  },
}
