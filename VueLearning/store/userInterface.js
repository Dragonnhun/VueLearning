export const state = () => ({
  dark_mode: false,
  show_sidebar: false,
  version: 0,
  bannerText: ""
})

export const mutations = {
  setDarkMode(state, value) {
    state.dark_mode = value
  },
  toggleDarkMode(state) {
    state.dark_mode = !state.dark_mode
  },
  toggleShowSidebar(state) {
    state.show_sidebar = !state.show_sidebar
  }

}
