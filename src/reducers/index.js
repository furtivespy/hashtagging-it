import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import tags from './tags'
import user from './login'

const rootReducer = combineReducers({
  tags,
  user,
  routing: routerReducer,
  form: reduxFormReducer,
});

export default rootReducer;
