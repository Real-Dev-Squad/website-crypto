import { createStore} from 'redux';
import { createWrapper, HYDRATE} from 'next-redux-wrapper';
import rootReducer from './reducers'


const makeStore = (context) => createStore(rootReducer);
 
export const wrapper = createWrapper(makeStore, {debug : true});