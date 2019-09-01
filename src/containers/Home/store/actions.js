import axios from 'axios';
import { GET_LIST } from './constants';

const getListAction = list => ({
  type: GET_LIST,
  list
});

export const getList = () => (dispatch, getState) => {
  axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
    console.log(res.data);
    dispatch(getListAction(res.data));
  });
};
