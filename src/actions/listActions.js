import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_FAIL = 'LIST FAIL';
const LIST_SUCCESS = 'LIST SUCCESS';

const getList = () => async (dispatch) => {
  console.log('here');
  try {
    dispatch({
      type: LIST_LOADING,
    });
    const result = await axios.get('https://calbeach.herokuapp.com/beaches');
    console.log('beach list', result.data);
    dispatch({
      type: LIST_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_FAIL,
    });
  }
};

export {
  LIST_LOADING, LIST_FAIL, LIST_SUCCESS, getList,

};