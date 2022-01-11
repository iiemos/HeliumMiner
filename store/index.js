
export const state = () => ({
  auth: null,
  route: null,
})
export const mutations ={
  setAuth(state, auth) {
    state.auth = auth
  },
  setRoute(state, auth) {
    state.route = auth
  },
}
export const actions = {
  /**
   * nuxt 初始化
   * @param commit
   * @param req
   */
  nuxtServerInit({commit, state}, {req}) {

  },

}

