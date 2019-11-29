/**
 * @component store
 * @description Store配置
 * @time 2018/3/1
 * @author jokerXu
 */
import thunkMiddleware from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';


import {reducer as topicReducer} from '../views/Topic';
// import {reducer as personReducer} from '../views/Person';
const win = window;

const reducer = combineReducers({
  topic: topicReducer,
  // person: personReducer,
});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  //  检查reducer 是否违反了作为一个纯函数的规定擅自修改了参数 state
  // middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
const store =  createStore(reducer, {}, storeEnhancers);
// let params = {
//   page:1,
//   tab:'ask',
//   limit:10,
//   mdrender:false
// }
// store.dispatch(topicAction['getTopic'](params)).then(() => console.log(store.getState()));
export default store





