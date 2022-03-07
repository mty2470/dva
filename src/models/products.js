export default {
  namespace: 'products',
  state: [],
  reducers: {
    add(state,{payload:list}) {
      return state.concat(list);
    },
    delete(state,{payload: id}) {
      return state.filter(item => item.id !== id);
    },
    *updateList({ payload},{call,put}){

    }
  },
  subscriptions: {
    load({history,dispatch}){
      return history.listen((pathname, callback) => {

      })
    }
  }
}