import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const STORE_INIT_STATE = {};

// let store;
// if (true) {
//    store = createStore(reducers, STORE_INIT_STATE,
//     composeWithDevTools(
//       applyMiddleware(ReduxThunk),
//       applyAppStateListener()
//   ));
// } else {
//   store = createStore(reducers, STORE_INIT_STATE,
//     applyMiddleware(ReduxThunk),
//     applyAppStateListener()
//   );
// }

export default createStore(reducers, STORE_INIT_STATE,
 composeWithDevTools(
   applyMiddleware(ReduxThunk),
));
