import { GET_ALL } from '../actions/dataActions';

const INITIAL_STATE = {
  json: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, json: action.payload };
    default:
      return state;
  }
}
