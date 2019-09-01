import { GET_LIST } from './constants';

const defaultState = {
  newsList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        newsList: action.list
      };
    default:
      return state;
  }
};
