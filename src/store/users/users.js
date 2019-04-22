const state = {
  nickname:'',
  router:''
};
const actions = {
  setUserNickname(context , param){
    context.commit('setNickNameCommit' , param);
  },
  setCurrentRouter(context , router){
    context.commit('setRouterCommit' , router);
  }
};

const mutations = {
  setNickNameCommit(state , val){
    state.nickname = val;
  },
  setRouterCommit(state , val){
    state.router = val;
  }
}

export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  mutations,
  actions
}
