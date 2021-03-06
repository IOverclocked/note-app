import uuidv1 from 'uuid/v1';
import axios from 'axios';

const urlRegister = 'http://localhost:9000/api/user/register';
const urlLogin = 'http://localhost:9000/api/user/login';
const urlAddNote = 'http://localhost:9000/api/note';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const removeItem = (itemType, id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post(urlAddNote, {
      userID: getState().userId,
      type: itemType,
      id: uuidv1(),
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTHENTICATE_REQUEST });

  return axios
    .post(urlLogin, { username, password })
    .then(payload => {
      console.log(payload);
      dispatch({ type: AUTHENTICATE_SUCCESS, payload });
    })
    .catch(err => dispatch({ type: AUTHENTICATE_FAILURE, err }));
};

export const register = (username, password) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  return axios
    .post(urlRegister, { username, password })
    .then(payload => dispatch({ type: REGISTER_SUCCESS }, payload))
    .catch(err => dispatch({ type: REGISTER_FAILURE, err }));
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {
      userId: null,
    },
  };
};
