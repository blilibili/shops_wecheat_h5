const state = {
  nickname:''
};
const actions = {
  setUserNickname(context , param){
    context.commit('setNickNameCommit' , param);
  }
};

const mutations = {
  setNickNameCommit(state , val){
    state.nickname = val;
  }
}

export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  mutations,
  actions
}
