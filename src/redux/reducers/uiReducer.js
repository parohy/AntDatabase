import { NAVBAR_SCROLL_EVENT } from '../actions/uiActions';

const INITIAL_STATE = {
  home: {
    offset: 0,
    lastOffset: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVBAR_SCROLL_EVENT: {
      let offset = 0;
      const { id } = action.payload;
      if (action.payload.offset > 0) {
        if (action.payload.offset < state[id].lastOffset) {
          offset = state[id].offset - (state[id].lastOffset - action.payload.offset);
          offset = offset > 0 ? offset : 0;
        } else {
          offset = action.payload.offset > 64 ? 64 : action.payload.offset;
        }
        return { ...state, [id]: { offset, lastOffset: action.payload.offset } };
      }
      return state;
    }
    default:
      return state;
  }
}
