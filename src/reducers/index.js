import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import tags from './tags'

const rootReducer = combineReducers({
  tags,
  routing: routerReducer,
  form: reduxFormReducer,
});

export default rootReducer;
