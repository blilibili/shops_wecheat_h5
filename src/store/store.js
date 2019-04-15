import Vue from 'vue'
import Vuex from 'vuex'
import Users from './users/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store(
  {
    modules:{
      Users
    }
  }
)
