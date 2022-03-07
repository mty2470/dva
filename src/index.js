import dva from 'dva';
import './index.css';
// import createHistory from 'history/createBrowserHistory'
// import {message} from 'antd';

// 1. Initialize
// const app = dva();
const app = dva({
  // history:createHistory,
  // onError,
  // onError(e){
  //   message.error(e.message)
  // },
  // onAction,
  // onStateChange,
  // onReducer,
  // onEffect,
  // onHmr,
  // extraReducers,
  // extraEnhancers,

  initialState:{
    products:[
      {name:'列表1',id:1},
      {name:'列表2',id:2},
      {name:'列表3',id:3},
      {name:'列表4',id:4},
      {name:'列表5',id:5},
      {name:'列表6',id:6},
    ],
  }
});

// 2. Plugins配置hook或者注册插件
// app.use({});
// app.use(createLoading(opts))

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
// app.model({
//   subscriptions:{
//     setup({dispatch},done){
//       done(e);
//     },
//   },
// });

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
