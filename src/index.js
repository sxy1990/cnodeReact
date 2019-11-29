import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const render = Component => {
    ReactDOM.render(
           <Provider store={store}>
            <Component />
           </Provider>
        ,
        document.getElementById('root')
    )
}
render(Route)
//ReactDOM.render(<Demo />, document.getElementById('root'));
serviceWorker.unregister();
