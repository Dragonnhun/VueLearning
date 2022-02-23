export const state = () => ({
  dark_mode: false
})

export const mutations = {
  set(state, value) {
    state.dark_mode = value
  },
  toggle(state) {
    state.dark_mode = !state.dark_mode
  }
}
